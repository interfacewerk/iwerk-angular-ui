import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Doc1Component } from './doc1/doc1.component';
import { Doc2Component } from './doc2/doc2.component';
import { Doc3Component } from './doc3/doc3.component';
import { DocsModule } from 'projects/docs/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    Doc1Component,
    Doc2Component,
    Doc3Component
  ],
  imports: [
    BrowserModule,
    DocsModule.configure({
      componentPages: {
        doc1: {
          title: 'DOC #1',
          component: Doc1Component
        },
        doc2: {
          title: 'DOC #2',
          component: Doc2Component
        },
        doc3: {
          title: 'DOC #3',
          component: Doc3Component
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
