import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodeSampleModule } from './code-sample/code-sample.module';
import { ComponentApiComponent } from './component-api/component-api.component';
import { ComponentDescriptionComponent } from './component-description/component-description.component';
import {
    ComponentDocumentationComponent,
    ComponentExampleDirective,
    AnchorContainerDirective,
    AnchorDirective
} from './component-documentation/component-documentation.component';
import { ComponentExampleComponent } from './component-example/component-example.component';

@NgModule({
    imports: [
        CodeSampleModule,
        CommonModule,
        FontAwesomeModule
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
        AnchorDirective
    ],
    declarations: [
        ComponentDescriptionComponent,
        ComponentApiComponent,
        ComponentDocumentationComponent,
        ComponentExampleDirective,
        ComponentExampleComponent,
        AnchorContainerDirective,
        AnchorDirective
    ]
})
export class CoreModule {}
