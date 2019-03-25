import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from '../../../../../src/public_api';
import { CodeLineComponent } from './code-line/code-line.component';
import { CodeSampleModule } from './code-sample/code-sample.module';
import { CodeComponent } from './code/code.component';
import { ComponentApiComponent } from './component-api/component-api.component';
import { ComponentDescriptionComponent } from './component-description/component-description.component';
import {
  AnchorContainerDirective,
  AnchorDirective,
  ComponentDocumentationComponent,
  ComponentExampleDirective
} from './component-documentation/component-documentation.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { TabDirective, TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CodeSampleModule,
    CommonModule,
    FontAwesomeModule,
    TooltipModule
  ],
  exports: [
    CodeSampleModule,
    ComponentDescriptionComponent,
    ComponentApiComponent,
    ComponentDocumentationComponent,
    ComponentExampleDirective,
    ComponentExampleComponent,
    FontAwesomeModule,
    AnchorContainerDirective,
    AnchorDirective,
    TabsComponent,
    TabDirective,
    CodeComponent,
    FontAwesomeModule,
    CodeLineComponent
  ],
  declarations: [
    ComponentDescriptionComponent,
    ComponentApiComponent,
    ComponentDocumentationComponent,
    ComponentExampleDirective,
    ComponentExampleComponent,
    AnchorContainerDirective,
    AnchorDirective,
    TabsComponent,
    TabDirective,
    CodeComponent,
    CodeLineComponent
  ]
})
export class CoreModule { }
