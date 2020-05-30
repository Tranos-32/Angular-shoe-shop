import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { homeComponent } from './home/home.component';
import { aboutComponent } from './about/about.component';
import { productsComponent } from './products/products.component';
import { contactComponent } from './contact/contact.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: []
})
export class AppModule { }
