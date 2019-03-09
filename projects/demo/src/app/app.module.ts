import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DocsModule } from 'projects/docs/src/public_api';
import { AppComponent } from './app.component';
import { PopoverDemoComponent } from './popover/popover-demo/popover-demo.component';
import { PopoverDemoModule } from './popover/popover.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { TooltipDemoComponent } from './tooltip/tooltip-demo/tooltip-demo.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { NavigationdDemoComponent } from './navigation/navigation/navigation.component';
import { EllipsisDemoComponent } from './ellipsis/ellipsis/ellipsis.component';
import { TooltipDemoModule } from './tooltip/tooltip.module';
import { EllipsisDemoModule } from './ellipsis/ellipsis.module';
import { NavigationDemoModule } from './navigation/navigation.module';
import { DialogDemoModule } from './dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PopoverDemoModule,
    TooltipDemoModule,
    NavigationDemoModule,
    EllipsisDemoModule,
    DialogDemoModule,
    DocsModule.configure({
      welcomePage: WelcomeComponent,
      componentPages: {
        popover: { title: 'Popover', component: PopoverDemoComponent },
        tooltip: { title: 'Tooltip', component: TooltipDemoComponent },
        dialog: { title: 'Dialog', component: DialogComponent },
        navigation: { title: 'Navigation', component: NavigationdDemoComponent },
        ellipsis: { title: 'Ellipsis', component: EllipsisDemoComponent }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
