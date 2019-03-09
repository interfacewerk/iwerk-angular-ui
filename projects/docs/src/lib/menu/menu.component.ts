import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocsComponent } from '../docs/docs.component';
import { ComponentPages, COMPONENT_PAGES } from '../routes.token';

@Component({
  selector: 'docs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  get secureBrandLogo() {
    return this.docs.secureBrandLogo;
  }

  get search$() {
    return this.docs.search$;
  }

  pages$: Observable<ComponentPages>;

  constructor(
    @Inject(COMPONENT_PAGES) private componentPages: ComponentPages,
    private docs: DocsComponent,
    private router: Router
  ) {
    this.pages$ = combineLatest(of(this.componentPages), this.search$)
      .pipe(map(([pages, search]) => {
        const normalized = (search || '').toLowerCase();
        return pages.filter(p => p.title.toLowerCase().indexOf(normalized) > -1);
      }));
  }

  setSearch(v: string) {
    this.router.navigate([], {
      queryParams: {
        search: v
      },
      queryParamsHandling: 'merge'
    });
  }
}
