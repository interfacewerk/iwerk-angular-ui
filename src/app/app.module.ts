import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EllipsisComponent } from './demo/ellipsis/ellipsis.component';
import { NavigationDemoComponent, SomeComponent, SomeOtherComponent } from './demo/navigation-demo/navigation.demo.component';
import { TreeDemoComponent } from './demo/tree/tree.component';
import { TreeModule } from './demo/tree/tree.module';
import { UiModule } from './ui/ui.module';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'ellipsis', component: EllipsisComponent },
  { path: 'popover', loadChildren: 'app/demo/popover/popover.module#PopoverModule' },
  { path: 'tooltip', loadChildren: 'app/demo/tooltip/tooltip.module#TooltipModule' },
  { path: 'stateful-button', loadChildren: 'app/demo/stateful-button/stateful-button.module#StatefulButtonDemoModule' },
  { path: 'dialog', loadChildren: 'app/demo/dialog-demo/dialog-demo.module#DialogDemoModule' },
  { path: 'checkbox', loadChildren: 'app/demo/checkbox-demo/checkbox-demo.module#CheckboxDemoModule' },
  { path: 'navigation', component: NavigationDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'movable', loadChildren: 'app/demo/movable-demo/movable-demo.module#MovableDemoModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EllipsisComponent,
    NavigationDemoComponent,
    SomeComponent,
    SomeOtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    RouterModule.forRoot(appRoutes),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  entryComponents: [
    SomeComponent,
    SomeOtherComponent
  ]
})
export class AppModule { }
