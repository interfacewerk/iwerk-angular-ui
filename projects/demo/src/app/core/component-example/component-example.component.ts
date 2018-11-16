import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { ComponentExampleDirective } from '../component-documentation/component-documentation.component';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnDestroy {
  @Input() example: ComponentExampleDirective;
  @ViewChild('code') code: ElementRef;
  faCopy = faCopy;
  copied = false;
  copiedTimeout: any;

  constructor() { }

  ngOnDestroy() {
    clearTimeout(this.copiedTimeout);
  }

  copy() {
    this.copyToClipboard(this.example.source);
    this.copied = true;
    clearTimeout(this.copiedTimeout);
    this.copiedTimeout = setTimeout(() => this.copied = false, 3000);
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
