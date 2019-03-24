import { Component, Input, Directive, HostListener, ElementRef, OnInit, OnDestroy, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface TreeItem {
  data: any;
  children?: TreeItem[];
}

/**
 * This component renders a tree of DOM elements based on the provided `tree` input.
 * It does nothing else than rendering. You have to provide a template for the node.
 ```ts
 import { TreeModule } from 'iwerk-angular-ui';
 ```
 */
@Component({
  selector: 'iw-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent {
  /**
   * The tree input to render. Use the `TreeItem` type definition.
   */
  @Input() set tree(v: TreeItem[]) {
    this.__tree = v;
    this.updateParentMap();
  }
  get tree(): TreeItem[] {
    return this.__tree;
  }

  /**
   * The expanded nodes: their children will be displayed.
   */
  @Input() expanded: TreeItem[] = [];
  nodeTemplate: TemplateRef<any>;

  /**
   * Event that is emitted when the set of expanded nodes changes.
   */
  @Output() expand = new EventEmitter<TreeItem[]>();

  focusEvent = new Subject<TreeItem>();
  parentMap = new Map<TreeItem, TreeItem>();

  private __tree: TreeItem[] = [];

  /**
   * Return `true` if the item has children, `false` otherwise.
   * @param item the item
   */
  hasChildren(item: TreeItem): boolean {
    return item.children && item.children.length > 0;
  }

  /**
   * Return `true` if the item is expanded, `false` otherwise.
   * @param item the item
   */
  isExpanded(item: TreeItem): boolean {
    return this.expanded.indexOf(item) > -1;
  }

  /**
   * Toggle the expanded state of the item.
   * @param item the item
   */
  toggleExpand(item: TreeItem) {
    if (!this.hasChildren(item)) {
      return;
    }
    if (this.isExpanded(item)) {
      this.collapseItem(item);
    } else {
      this.expandItem(item);
    }
  }

  /**
   * Expand the item: display its children.
   * @param item the item
   */
  expandItem(item: TreeItem) {
    if (!this.hasChildren(item)) {
      return;
    }
    this.setExpanded(this.expanded.concat([item]));
  }

  /**
   * Collapse the item: hide its children.
   * @param item the item
   */
  collapseItem(item: TreeItem) {
    this.setExpanded(this.expanded.filter(e => e !== item));
  }

  /**
   * @ignore
   */
  sendFocusEvent(item: TreeItem) {
    this.focusEvent.next(item);
  }

  /**
   * @ignore
   */
  private setExpanded(v: TreeItem[]) {
    this.expanded = v;
    this.expand.emit(v);
  }

  /**
   * @ignore
   */
  private updateParentMap() {
    this.parentMap = new Map();
    const aux = (parent: TreeItem, nodes: TreeItem[]) => {
      nodes.forEach(n => {
        this.parentMap.set(n, parent);
        aux(n, n.children || []);
      });
    };
    aux(undefined, this.__tree);
  }
}

@Directive({
  selector: '[iwTreeNodeTemplate]'
})
export class TreeNodeTemplateDirective {
  constructor(public templateRef: TemplateRef<any>, private menu: TreeComponent) {
    this.menu.nodeTemplate = this.templateRef;
  }
}

@Directive({
  selector: '[iwTreeItem]'
})
export class TreeItemDirective implements OnInit, OnDestroy {
  @Input('iwTreeItem') item: TreeItem;

  private subscription = new Subscription;

  constructor(
    private menu: TreeComponent,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.subscription.add(this.menu.focusEvent
      .pipe(filter(e => e === this.item))
      .subscribe(e => {
        this.elementRef.nativeElement.focus();
      }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('keydown', ['$event'])
  keydown($event: KeyboardEvent) {
    switch ($event.keyCode) {
      case 39:
        this.goRight($event); break;
      case 40:
        this.goDown($event); break;
      case 38:
        this.goUp($event); break;
      case 37:
        this.goLeft($event); break;
    }
  }

  private goLeft($event: KeyboardEvent) {
    $event.preventDefault();
    if (this.menu.isExpanded(this.item)) {
      return this.menu.collapseItem(this.item);
    }
    const parent = this.menu.parentMap.get(this.item);
    if (parent) {
      this.menu.sendFocusEvent(parent);
    } else {
      this.goUp($event);
    }
  }

  private goRight($event: KeyboardEvent) {
    $event.preventDefault();
    if (!this.menu.hasChildren(this.item)) {
      return this.goDown($event);
    }
    if (!this.menu.isExpanded(this.item)) {
      return this.menu.expandItem(this.item);
    }
    this.menu.sendFocusEvent(this.item.children[0]);
  }

  private goDown($event: KeyboardEvent) {
    $event.preventDefault();
    if (
      this.menu.hasChildren(this.item) &&
      this.menu.isExpanded(this.item)
    ) {
      return this.menu.sendFocusEvent(this.item.children[0]);
    }
    const selectAfter = (item: TreeItem) => {
      const parent = this.menu.parentMap.get(item);
      const children = parent ? parent.children : this.menu.tree;
      const index = children.indexOf(item);
      const next = children[index + 1];
      if (next) {
        this.menu.sendFocusEvent(next);
      } else if (parent) {
        selectAfter(parent);
      }
    };
    selectAfter(this.item);
  }

  private goUp($event: KeyboardEvent) {
    $event.preventDefault();
    const selectLastPossible = (item: TreeItem) => {
      if (this.menu.hasChildren(item) && this.menu.isExpanded(item)) {
        selectLastPossible(item.children[item.children.length - 1]);
      } else {
        this.menu.sendFocusEvent(item);
      }
    };
    const selectBefore = (item: TreeItem) => {
      const parent = this.menu.parentMap.get(item);
      const children = parent ? parent.children : this.menu.tree;
      const index = children.indexOf(item);
      const previous = children[index - 1];
      if (previous) {
        selectLastPossible(previous);
      } else if (parent) {
        this.menu.sendFocusEvent(parent);
      }
    };
    selectBefore(this.item);
  }
}
