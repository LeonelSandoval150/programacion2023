import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from '../app-routing.module';
//material
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports :[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent
  ]

})
export class SharedModule { }
