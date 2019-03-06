import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationData, NavigationController } from './navigation-controller.service';

export { NavigationComponent, NavigationData, NavigationController };

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
