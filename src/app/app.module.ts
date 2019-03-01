import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EllipsisComponent } from './demo/ellipsis/ellipsis.component';
import { UiModule } from './ui/ui.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationDemoComponent, SomeComponent, SomeOtherComponent } from './demo/navigation-demo/navigation.demo.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'ellipsis', component: EllipsisComponent },
  { path: 'popover', loadChildren: 'app/demo/popover/popover.module#PopoverModule' },
  { path: 'tooltip', loadChildren: 'app/demo/tooltip/tooltip.module#TooltipModule' },
  { path: 'stateful-button', loadChildren: 'app/demo/stateful-button/stateful-button.module#StatefulButtonDemoModule' },
  { path: 'dialog', loadChildren: 'app/demo/dialog-demo/dialog-demo.module#DialogDemoModule' },
  { path: 'checkbox', loadChildren: 'app/demo/checkbox-demo/checkbox-demo.module#CheckboxDemoModule' },
  { path: 'navigation', component: NavigationDemoComponent },
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
    RouterModule.forRoot(appRoutes)
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
