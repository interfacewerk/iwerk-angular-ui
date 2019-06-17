import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopoverModule, IW_POPOVER_CONFIG, PopoverConfig } from 'src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    PopoverModule
  ],
  providers: [
    { provide: IW_POPOVER_CONFIG, useValue: {
      escToClose: true,
      clickOutsideToClose: true
    } as PopoverConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
