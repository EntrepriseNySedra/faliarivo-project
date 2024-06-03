import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PopoverModule } from 'ngx-bootstrap/popover';

import { ModalModule } from 'ngx-bootstrap/modal';

import { SlugifyPipe } from 'pipes/slugify.pipe';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SlugifyPipe
  ],
  imports: [
    ModalModule.forRoot(),
    FormsModule,
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    PopoverModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
