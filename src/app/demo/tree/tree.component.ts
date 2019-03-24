import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeItem, TreeComponent as UiTreeComponent } from '../../ui/tree/tree/tree.component';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: `
    <iw-tree [tree]="items" #tree>
      <ng-template iwTreeNodeTemplate let-node let-hasChildren="hasChildren">
        {{node.data}} <button *ngIf="hasChildren" (click)="tree.toggleExpand(node)">togdgle</button>
      </ng-template>
    </iw-tree>
  `
})
export class Tree1Component {
  items: TreeItem[] = [{
    data: 'Node #1',
    children: [{
      data: 'Node #1.1',
      children: [{
        data: 'Node #1.1.1'
      }, {
        data: 'Node #1.1.2'
      }, {
        data: 'Node #1.1.3'
      }]
    }, {
      data: 'Node #1.2',
      children: [{
        data: 'Node #1.2.1'
      }, {
        data: 'Node #1.2.2'
      }, {
        data: 'Node #1.2.3'
      }]
    }, {
      data: 'Node #1.3',
      children: [{
        data: 'Node #1.3.1'
      }, {
        data: 'Node #1.3.2'
      }, {
        data: 'Node #1.3.3'
      }]
    }]
  }];
}

@Component({
  template: `
    <iw-tree [tree]="items" #tree>
      <ng-template iwTreeNodeTemplate let-node>
        <div tabindex="0" [iwTreeItem]="node">{{node.data}}</div>
      </ng-template>
    </iw-tree>
  `,
  styles: [
    'div:focus { background: grey; }'
  ]
})
export class Tree2Component {
  items: TreeItem[] = [{
    data: 'Node #1',
    children: [{
      data: 'Node #1.1',
      children: [{
        data: 'Node #1.1.1'
      }, {
        data: 'Node #1.1.2'
      }, {
        data: 'Node #1.1.3'
      }]
    }, {
      data: 'Node #1.2',
      children: [{
        data: 'Node #1.2.1'
      }, {
        data: 'Node #1.2.2'
      }, {
        data: 'Node #1.2.3'
      }]
    }, {
      data: 'Node #1.3',
      children: [{
        data: 'Node #1.3.1'
      }, {
        data: 'Node #1.3.2'
      }, {
        data: 'Node #1.3.3'
      }]
    }]
  }];
}

@Component({
  template: `
    <iw-tree [tree]="items" [expanded]="expanded" #tree>
      <ng-template iwTreeNodeTemplate let-node>
        <div tabindex="0" [iwTreeItem]="node">{{node.data}}</div>
      </ng-template>
    </iw-tree>
  `,
  styles: [
    'div:focus { background: grey; }'
  ]
})
export class Tree3Component {
  items: TreeItem[] = [{
    data: 'Node #1',
    children: [{
      data: 'Node #1.1',
      children: [{
        data: 'Node #1.1.1'
      }, {
        data: 'Node #1.1.2'
      }, {
        data: 'Node #1.1.3'
      }]
    }, {
      data: 'Node #1.2',
      children: [{
        data: 'Node #1.2.1'
      }, {
        data: 'Node #1.2.2'
      }, {
        data: 'Node #1.2.3'
      }]
    }, {
      data: 'Node #1.3',
      children: [{
        data: 'Node #1.3.1'
      }, {
        data: 'Node #1.3.2'
      }, {
        data: 'Node #1.3.3'
      }]
    }]
  }];
  expanded: TreeItem[] = [];

  ngOnInit() {
    this.expanded = [
      this.items[0],
      this.items[0].children[1]
    ];
  }
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TreeDemoComponent implements OnInit {
  caretRight = faCaretRight;
  caretDown = faCaretDown;
  demo1 = Tree1Component;
  demo2 = Tree2Component;
  demo3 = Tree3Component;

  tree: TreeItem[] = [{
    data: {
      label: '1',
      routerLink: [],
      queryParams: {
        truc: 1
      }
    },
    children: [{
      data: {
        label: '2',
        routerLink: [],
        queryParams: {
          truc: 2
        },
      },
      children: [{
        data: {
          label: '2',
          routerLink: [],
          queryParams: {
            truc: 2
          }
        }
      }, {
        data: {
          label: '3',
          routerLink: [],
          queryParams: {
            truc: 3
          }
        }
      }]
    }, {
      data: {
        label: '3',
        routerLink: [],
        queryParams: {
          truc: 3
        }
      }
    }]
  }, {
    data: {
      label: '1',
      routerLink: [],
      queryParams: {
        truc: 1
      }
    },
    children: [{
      data: {
        label: '2',
        routerLink: [],
        queryParams: {
          truc: 2
        }
      }
    }, {
      data: {
        label: '3',
        routerLink: [],
        queryParams: {
          truc: 3
        }
      }
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

  toggleExpand(tree: UiTreeComponent, item: TreeItem, $event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    $event.stopImmediatePropagation();
    tree.toggleExpand(item);
  }

  getLinkStyle(depth: number) {
    return { padding: `0 ${depth * 20}px` };
  }
}
