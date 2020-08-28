import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DsctoPipe } from './pipes/dscto/dscto.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DsctoPipe
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DsctoPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
