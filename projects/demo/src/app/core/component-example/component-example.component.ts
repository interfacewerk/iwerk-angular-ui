import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ComponentExampleDirective } from '../component-documentation/component-documentation.component';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {
  @Input() example: ComponentExampleDirective;
  @ViewChild('code') code: ElementRef;
  faCopy = faCopy;

  constructor() { }

  ngOnInit() {
  }

  copy() {
    this.copyToClipboard(this.example.source);
  }

  private copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
