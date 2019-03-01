import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationModule } from 'src/public_api';
import { CoreModule } from '../core/core.module';
import { Example1Component, NavigationdDemoComponent, Example2Component, Example3Component } from './navigation/navigation.component';

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
