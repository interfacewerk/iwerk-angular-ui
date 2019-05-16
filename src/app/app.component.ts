import { Component } from '@angular/core';
import { TreeItem } from './ui/tree/tree/tree.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isClosed = false;

  tree: TreeItem[] = [
    {
      data: {
        routerLink: ['/'],
        routerLinkActiveOptions: {exact: true},
        label: 'Get Started'
      }
    },
    {
      data: {
        routerLink: ['/ellipsis'], label: 'Ellipsis'
      },
    },
    {
      data: {
        routerLink: ['/popover'], label: 'Popover'
      },
    },
    {
      data: {
        routerLink: ['/tooltip'], label: 'Tooltip'
      },
    },
    {
      data: {
        routerLink: ['/stateful-button'], label: 'Stateful Button'
      },
    },
    {
      data: {
        routerLink: ['/dialog'], label: 'Dialog'
      },
    },
    {
      data: {
        routerLink: ['/checkbox'], label: 'Checkbox'
      },
    },
    {
      data: {
        routerLink: ['/navigation'], label: 'Navigation'
      },
    },
    {
      data: {
        routerLink: ['/tree'], label: 'Tree'
      },
    },
    {
      data: {
        routerLink: ['/movable'], label: 'Movable'
      },
    },
  ];

  linkStyle(depth: number) {
    return {
      padding: `0 ${(depth + 1) * 15}px`
    };
  }
}
