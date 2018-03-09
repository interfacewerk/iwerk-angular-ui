import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

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
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
