import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/public_api';
import { CoreModule } from '../core/core.module';
import { Example2Component } from './navigation-example1/navigation-example1-nested2.component';
import { Example3Component } from './navigation-example1/navigation-example1-nested3.component';
import { Example1Component } from './navigation-example1/navigation-example1.component';
import { NavigationdDemoComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NavigationdDemoComponent }
    ]),
    NavigationModule,
    CoreModule
  ],
  declarations: [
    NavigationdDemoComponent,
    Example1Component, Example2Component, Example3Component
  ],
  entryComponents: [
    Example1Component, Example2Component, Example3Component
  ],
  exports: [RouterModule]
})
export class NavigationDemoModule { }
