import { Component, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'docs-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.sass']
})
export class CodeComponent implements OnDestroy {
  @Input() path: string;
  @ViewChild('code') code: ElementRef;
  faCopy = faCopy;
  copied = false;
  copiedTimeout: any;

  ngOnDestroy() {
    clearTimeout(this.copiedTimeout);
  }

  copy() {
    this.copyToClipboard(this.code.nativeElement.innerText);
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
