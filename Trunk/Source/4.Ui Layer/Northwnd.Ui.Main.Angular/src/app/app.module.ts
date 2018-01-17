import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListSupplier } from '../Component/List.Supplier';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SupplierService } from '../Services/Supplier.Service';


@NgModule({
    declarations: [
        AppComponent,
        ListSupplier
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpModule,
        FormsModule
    ],
    providers: [SupplierService],
    bootstrap: [AppComponent]
})
export class AppModule { }
