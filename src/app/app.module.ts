import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { ComponentExampleComponent } from './component-example/component-example.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'popover', loadChildren: 'app/demo/popover/popover.module#PopoverModule' },
  { path: 'tooltip', loadChildren: 'app/demo/tooltip/tooltip.module#TooltipModule' },
  { path: 'stateful-button', loadChildren: 'app/demo/stateful-button/stateful-button.module#StatefulButtonDemoModule' },
  { path: 'dialog', loadChildren: 'app/demo/dialog-demo/dialog-demo.module#DialogDemoModule' },
  { path: 'checkbox', loadChildren: 'app/demo/checkbox-demo/checkbox-demo.module#CheckboxDemoModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ComponentDocumentationComponent,
    ComponentExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
