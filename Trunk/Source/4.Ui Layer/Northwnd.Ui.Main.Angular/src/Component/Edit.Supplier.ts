import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../Services/Supplier.Service';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
    selector: 'edit-supplier',
    templateUrl: './Edit.Supplier.html',
    styleUrls: ['./Edit.Supplier.css']
})

export class EditSupplier {
    id: number;
    sub: any;
    SupplierData: SupplierDetails;



    constructor(private route: ActivatedRoute, private supplierService: SupplierService) {
       
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
        this.supplierService.GetSupplierPerId(id).subscribe(m => { this.SupplierData = m; });
    }

    SaveDetails(formData: any) {
        this.supplierService.UpdateSupplier(this.SupplierData);
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