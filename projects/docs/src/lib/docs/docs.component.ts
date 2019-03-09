import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
  }

  get search$(): Observable<string> {
    return this.route.queryParams.pipe(map(p => p.search || ''));
  }
}
