import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MultilineEllipsisModule } from 'src/app/ui/multiline-ellipsis/multiline-ellipsis.module';
import { EllipsisDemoComponent, EllipsisDemoExample1Component } from './ellipsis/ellipsis.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: EllipsisDemoComponent }
        ]),
        MultilineEllipsisModule,
        FormsModule,
        CoreModule
    ],
    declarations: [
        EllipsisDemoComponent,
        EllipsisDemoExample1Component,
    ],
    exports: [RouterModule]
})
export class EllipsisDemoModule { }
