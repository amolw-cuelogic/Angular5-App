import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TokenHandler } from './token.handler';
import { ListSupplier } from '../Component/List.Supplier';
import { EditSupplier } from '../Component/Edit.Supplier';
import { LoginComponent } from '../Component/Login.Component';

import { AuthInterceptor } from './token.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SupplierService } from '../Services/Supplier.Service';


@NgModule({
    declarations: [
        AppComponent,
        ListSupplier,
        EditSupplier,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpModule,
        HttpClientModule,
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
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                component: ListSupplier
            }
        ])
    ],
    providers: [SupplierService,
        TokenHandler,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
