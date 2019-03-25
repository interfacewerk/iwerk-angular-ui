import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'docs-code-line',
  templateUrl: './code-line.component.html',
  styleUrls: ['./code-line.component.sass']
})
export class CodeLineComponent implements OnDestroy {
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
