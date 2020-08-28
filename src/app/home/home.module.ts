import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridprodsComponent } from './components/gridprods/gridprods.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module'

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        GridprodsComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class HomeModule {

}