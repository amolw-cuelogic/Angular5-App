import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListSupplier } from '../Component/List.Supplier';
import { EditSupplier } from '../Component/Edit.Supplier';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupplierService } from '../Services/Supplier.Service';


@NgModule({
    declarations: [
        AppComponent,
        ListSupplier,
        EditSupplier
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: ListSupplier
            },
            
            {
                path: 'editSupplier/:id',
                component: EditSupplier
            },
            {
                path: '**',
                component: ListSupplier
            }
        ])
    ],
    providers: [SupplierService],
    bootstrap: [AppComponent]
})
export class AppModule { }
