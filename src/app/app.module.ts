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
  { path: 'popover', loadChildren: () => import('./demo/popover/popover.module').then(m => m.PopoverModule) },
  { path: 'tooltip', loadChildren: () => import('./demo/tooltip/tooltip.module').then(m => m.TooltipModule) },
  {
    path: 'stateful-button',
    loadChildren: () => import('./demo/stateful-button/stateful-button.module').then(m => m.StatefulButtonDemoModule)
  },
  { path: 'dialog', loadChildren: () => import('./demo/dialog-demo/dialog-demo.module').then(m => m.DialogDemoModule) },
  { path: 'checkbox', loadChildren: () => import('./demo/checkbox-demo/checkbox-demo.module').then(m => m.CheckboxDemoModule) },
  { path: 'navigation', component: NavigationDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'movable', loadChildren: () => import('./demo/movable-demo/movable-demo.module').then(m => m.MovableDemoModule) },
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
