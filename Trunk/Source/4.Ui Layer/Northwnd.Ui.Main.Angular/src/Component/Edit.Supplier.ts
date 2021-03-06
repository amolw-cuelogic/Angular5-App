﻿import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../Services/Supplier.Service';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'edit-supplier',
    templateUrl: './Edit.Supplier.html',
    styleUrls: ['./Edit.Supplier.css']
})

export class EditSupplier {
    id: number;
    sub: any;
    SupplierData: any;



    constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {
       
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            //To get parameter from route
            //Method-1
            this.id = +params['id'];
            //Method-2
            this.id = +params.id;

            this.SupplierData = {
                SupplierID: 0,
                CompanyName: '',
                ContactName: '',
                ContactTitle: '',
                Address: '',
                City: '',
                Region: '',
                PostalCode: '',
                Country: '',
                Phone: '',
                Fax: '',
                HomePage: ''
            };
            this.GetSupplierDetails(this.id);
        });
    }

    GetSupplierDetails(id: number) {
        this.httpClient.get("http://localhost:58582/api/supplier/GetSupplierDetails/" + id.toString()).subscribe(
            m => {
                this.SupplierData = m;
            }
        );
        
    }

    SaveDetails(formData: any) {
        var da = JSON.stringify(formData);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.httpClient.post("http://localhost:58582/api/supplier/PostSaveSupplier", da, { headers: headers }).subscribe(
            m => {
                this.router.navigate(['/']);
            }
        );

        //this.supplierService.UpdateSupplier(this.SupplierData);
    }
}

export interface SupplierDetails {
    SupplierID: number,
    CompanyName: string,
    ContactName: string,
    ContactTitle: string,
    Address: string,
    City: string,
    Region: string,
    PostalCode: string,
    Country: string,
    Phone: string,
    Fax: string,
    HomePage: string
}