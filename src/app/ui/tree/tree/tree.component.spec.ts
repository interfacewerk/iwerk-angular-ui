import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeModule, TreeComponent } from '../tree.module';
import { TreeItem } from './tree.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `<iw-tree [tree]="items" [expanded]="expanded" #tree>
    <ng-template iwTreeNodeTemplate let-node>
      <div class="stub-node"
        [iwTreeItem]="node"
        tabindex="0"
        id="{{node.data}}">
        <button (click)="tree.toggleExpand(node)">toggle</button>
      </div>
    </ng-template>
  </iw-tree>`
})
class StubComponent {
  items: TreeItem[] = [
    { data: 'tree-item-0' },
    {
      data: 'tree-item-1',
      children: [
        { data: 'tree-item-2' },
        { data: 'tree-item-3' }
      ]
    },
    {
      data: 'tree-item-4',
      children: [
        { data: 'tree-item-5' },
        { data: 'tree-item-6' }
      ]
    }
  ];

  expanded: TreeItem[] = [];
}

describe('TreeComponent Integration', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TreeModule],
      declarations: [StubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('displays the given expanded nodes', () => {
    component.expanded = [component.items[1]];
    fixture.detectChanges();
    const ids = getVisibleIds();
    expect(ids).toEqual([
      'tree-item-0',
      'tree-item-1',
      'tree-item-2',
      'tree-item-3',
      'tree-item-4'
    ]);
  });

  it('hides/shows nodes', () => {
    component.expanded = [component.items[1]];
    fixture.detectChanges();
    expect(getVisibleIds()).toEqual([
      'tree-item-0',
      'tree-item-1',
      'tree-item-2',
      'tree-item-3',
      'tree-item-4'
    ]);
    fixture.debugElement.query(By.css('#tree-item-1 button')).triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(getVisibleIds()).toEqual([
      'tree-item-0',
      'tree-item-1',
      'tree-item-4'
    ]);
    fixture.debugElement.query(By.css('#tree-item-1 button')).triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(getVisibleIds()).toEqual([
      'tree-item-0',
      'tree-item-1',
      'tree-item-2',
      'tree-item-3',
      'tree-item-4'
    ]);
  });

  function getVisibleIds() {
    return fixture.debugElement.queryAll(By.css('.stub-node'))
      .map(e => e.nativeElement.id);
  }

  describe('iwTreeItem directive', () => {

    it('goes down from one element to its successor when the user presses Down', () => {
      component.expanded = [component.items[2]];
      fixture.detectChanges();
      focusOn(0);
      keydown(0, 40);
      expectActiveElement(1);
      keydown(1, 40);
      expectActiveElement(4);
      keydown(4, 40);
      expectActiveElement(5);
    });

    it('expands when the user presses Right', () => {
      component.expanded = [];
      fixture.detectChanges();
      focusOn(4);
      keydown(4, 39);
      expect(getVisibleIds()).toEqual([
        'tree-item-0',
        'tree-item-1',
        'tree-item-4',
        'tree-item-5',
        'tree-item-6'
      ]);
    });

    it('goes to the next when the user presses Right and no children', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(2);
      keydown(2, 39);
      expectActiveElement(3);
    });

    it('goes to the first child when the user presses Right and already expanded', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(1);
      keydown(1, 39);
      expectActiveElement(2);
    });

    it('collapses when the user presses Left', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(1);
      keydown(1, 37);
      expect(getVisibleIds()).toEqual([
        'tree-item-0',
        'tree-item-1',
        'tree-item-4'
      ]);
    });

    it('goes to the parent when the user presses Left but it is already collapsed', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(2);
      keydown(2, 37);
      expectActiveElement(1);
    });

    it('goes to the parent when the user presses Left but it is already collapsed and no parent', () => {
      component.expanded = [];
      fixture.detectChanges();
      focusOn(1);
      keydown(1, 37);
      expectActiveElement(0);
    });

    it('goes to the next when the user presses Down', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(0);
      keydown(0, 40);
      expectActiveElement(1);
      keydown(1, 40);
      expectActiveElement(2);
      keydown(2, 40);
      expectActiveElement(3);
      keydown(3, 40);
      expectActiveElement(4);
      keydown(4, 40);
      expectActiveElement(4);
    });

    it('goes to the previous when the user presses Up', () => {
      component.expanded = [];
      fixture.detectChanges();
      focusOn(0);
      keydown(0, 40);
      keydown(1, 40);
      keydown(4, 38);
      expectActiveElement(1);
      keydown(1, 38);
      expectActiveElement(0);
      keydown(0, 38);
      expectActiveElement(0);
    });

    it('goes up to the parent when there is no previous sibling', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(2);
      keydown(2, 38);
      expectActiveElement(1);
    });

    it('goes to the last child of the previous item if it is expanded', () => {
      component.expanded = [component.items[1]];
      fixture.detectChanges();
      focusOn(4);
      keydown(4, 38);
      expectActiveElement(3);
    });
  });

  function focusOn(id: number) {
    fixture.debugElement.query(By.css('#tree-item-' + id)).nativeElement.focus();
  }

  function keydown(id: number, keyCode: number) {
    fixture.debugElement.query(By.css('#tree-item-' + id)).triggerEventHandler('keydown', {
      keyCode,
      preventDefault: () => { }
    });
    fixture.detectChanges();
  }

  function expectActiveElement(id: number) {
    expect(document.activeElement.id).toBe('tree-item-' + id);
  }

});

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TreeModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    component.tree = [
      { data: 'tree-item-0' },
      {
        data: 'tree-item-1',
        children: [
          { data: 'tree-item-2' },
          { data: 'tree-item-3' }
        ]
      },
      {
        data: 'tree-item-4',
        children: [
          { data: 'tree-item-5' },
          { data: 'tree-item-6' }
        ]
      }
    ];
    component.expanded = [];
  });

  it('does nothing for toggleExpand if the node does not have children', () => {
    component.toggleExpand(component.tree[0]);
    expect(component.expanded).toEqual([]);
  });

  it('does nothing for expandItem if the node does not have children', () => {
    component.expandItem(component.tree[0]);
    expect(component.expanded).toEqual([]);
  });
});
