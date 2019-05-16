import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DocsModule } from 'ng-documentation';
import { AppComponent } from './app.component';
import { DialogDemoModule } from './dialog/dialog.module';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { EllipsisDemoModule } from './ellipsis/ellipsis.module';
import { EllipsisDemoComponent } from './ellipsis/ellipsis/ellipsis.component';
import { NavigationDemoModule } from './navigation/navigation.module';
import { NavigationdDemoComponent } from './navigation/navigation/navigation.component';
import { PopoverDemoComponent } from './popover/popover-demo/popover-demo.component';
import { PopoverDemoModule } from './popover/popover.module';
import { TooltipDemoComponent } from './tooltip/tooltip-demo/tooltip-demo.component';
import { TooltipDemoModule } from './tooltip/tooltip.module';
import { TreeDocsComponent } from './tree-docs/tree-docs.component';
import { TreeDocsModule } from './tree-docs/tree-docs.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovableComponent } from './movable/movable/movable.component';
import { MovableModule } from './movable/movable.module';

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
    TreeDocsModule,
    MovableModule,
    DocsModule,
    DocsModule.configure({
      welcomePage: WelcomeComponent,
      componentPages: {
        popover: { title: 'Popover', component: PopoverDemoComponent },
        tooltip: { title: 'Tooltip', component: TooltipDemoComponent },
        dialog: { title: 'Dialog', component: DialogComponent },
        navigation: { title: 'Navigation', component: NavigationdDemoComponent },
        ellipsis: { title: 'Ellipsis', component: EllipsisDemoComponent },
        tree: { title: 'Tree', component: TreeDocsComponent },
        movable: { title: 'Movable', component: MovableComponent }
      }
    })
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
