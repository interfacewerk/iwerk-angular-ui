import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { DefaultWelcomeComponent } from './default-welcome/default-welcome.component';
import { DocsComponent } from './docs/docs.component';
import { ComponentPageMap, COMPONENT_PAGES, ComponentPages } from './routes.token';


@NgModule({
  declarations: [
    DocsComponent,
    DefaultWelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    CoreModule
  ],
  exports: [
    DocsComponent,
    CoreModule
  ]
})
export class DocsModule {
  static configure(configuration: {
    welcomePage?: Type<any>
    componentPages: ComponentPageMap
  }): ModuleWithProviders {
    const sortedComponents: ComponentPages = Object.keys(configuration.componentPages).map(path => ({
      path,
      component: configuration.componentPages[path].component,
      title: configuration.componentPages[path].title
    }));
    sortedComponents.sort((a, b) => a.title.localeCompare(b.title));
    return {
      ngModule: DocsModule,
      providers: [
        { provide: COMPONENT_PAGES, useValue: sortedComponents },
        provideRoutes(
          [
            ...sortedComponents,
            { path: '', component: configuration.welcomePage || DefaultWelcomeComponent }
          ]
        )
      ]
    };
  }
}
