import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'docs-component-description',
  templateUrl: './component-description.component.html',
  styleUrls: ['./component-description.component.sass'],
})
export class ComponentDescriptionComponent implements OnInit {
  @Input() componentId: string;
  @Input() componentType: string;

  constructor() { }

  ngOnInit() {
  }

}
