import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridprodsComponent } from './gridprods/gridprods.component';
import { FooterComponent } from './footer/footer.component';
import { DsctoPipe } from './dscto.pipe';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GridprodsComponent,
    FooterComponent,
    DsctoPipe,
    SearchbarComponent,
    DemoComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
