import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocsModule } from 'ng-documentation';
import { NavigationModule } from 'src/public_api';
import { Example2Component } from './navigation-example1/navigation-example1-nested2.component';
import { Example3Component } from './navigation-example1/navigation-example1-nested3.component';
import { Example1Component } from './navigation-example1/navigation-example1.component';
import { NavigationdDemoComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    DocsModule
  ],
  declarations: [
    NavigationdDemoComponent,
    Example1Component, Example2Component, Example3Component
  ],
  entryComponents: [
    Example1Component, Example2Component, Example3Component
  ]
})
export class NavigationDemoModule { }
