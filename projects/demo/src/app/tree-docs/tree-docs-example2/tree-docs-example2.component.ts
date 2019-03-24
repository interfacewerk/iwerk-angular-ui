import { Component } from '@angular/core';
import { TreeItem } from 'src/public_api';

@Component({
  selector: 'app-tree-docs-example2',
  templateUrl: './tree-docs-example2.component.html',
  styles: [
    'div:focus { background: grey; }'
  ]
})
export class TreeDocsExample2Component {
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
