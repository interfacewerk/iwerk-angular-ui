import { Component, Input } from '@angular/core';
import { ComponentExampleDirective } from '../component-documentation/component-documentation.component';

@Component({
  selector: 'docs-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.sass']
})
export class ComponentExampleComponent {
  @Input() example: ComponentExampleDirective;
}
