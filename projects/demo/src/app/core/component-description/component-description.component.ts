import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-description',
  templateUrl: './component-description.component.html',
  styleUrls: ['./component-description.component.scss'],
})
export class ComponentDescriptionComponent implements OnInit {
  @Input() componentId: string;
  @Input() componentType: string;

  constructor() { }

  ngOnInit() {
  }

}
