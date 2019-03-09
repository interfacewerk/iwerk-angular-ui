import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ComponentPages, COMPONENT_PAGES } from '../routes.token';

@Component({
  selector: 'docs-app',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DocsComponent {
  @Input() set brandLogo(v:  string) {
    this.secureBrandLogo = this.sanitizer.bypassSecurityTrustStyle(`url(${v})`);
  }

  secureBrandLogo: SafeStyle;

  constructor(
    @Inject(COMPONENT_PAGES) public routes: ComponentPages,
    private sanitizer: DomSanitizer
  ) { }
}
