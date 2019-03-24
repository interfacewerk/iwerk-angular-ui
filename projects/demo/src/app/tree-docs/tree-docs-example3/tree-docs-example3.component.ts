import { Component } from '@angular/core';
import { TreeComponent, TreeItem } from 'src/public_api';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree-docs-example3',
  templateUrl: './tree-docs-example3.component.html'
})
export class TreeDocsExample3Component {
  tree: TreeItem[] = [{
    data: {
      label: '1',
      routerLink: [],
      queryParams: {
        someParam: 1
      }
    },
    children: [{
      data: {
        label: '2',
        routerLink: [],
        queryParams: {
          someParam: 2
        },
      },
      children: [{
        data: {
          label: '3',
          routerLink: [],
          queryParams: {
            someParam: 3
          }
        }
      }, {
        data: {
          label: '4',
          routerLink: [],
          queryParams: {
            someParam: 4
          }
        }
      }]
    }, {
      data: {
        label: '5',
        routerLink: [],
        queryParams: {
          someParam: 5
        }
      }
    }]
  }, {
    data: {
      label: '6',
      routerLink: [],
      queryParams: {
        someParam: 6
      }
    },
    children: [{
      data: {
        label: '7',
        routerLink: [],
        queryParams: {
          someParam: 7
        }
      }
    }, {
      data: {
        label: '8',
        routerLink: [],
        queryParams: {
          someParam: 8
        }
      }
    }]
  }];

  caretRight = faCaretRight;
  caretDown = faCaretDown;

  getLinkStyle(depth: number) {
    return { padding: `0 ${depth * 20}px` };
  }

  toggleExpand(tree: TreeComponent, item: TreeItem, $event: MouseEvent) {
    $event.stopPropagation();
    $event.preventDefault();
    $event.stopImmediatePropagation();
    tree.toggleExpand(item);
  }

}
