import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../Services/Supplier.Service';

@Component({
    selector: 'edit-supplier',
    templateUrl: './Edit.Supplier.html',
    styleUrls: ['./Edit.Supplier.css']
})

export class EditSupplier {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute, private supplierService: SupplierService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            //To get parameter from route
            //Method-1
            this.id = +params['id']; 
            //Method-2
            this.id = +params.id;
            this.GetSupplierDetails(this.id);
        });
    }

    GetSupplierDetails(id: number) {
        this.supplierService.GetSupplierPerId(id).subscribe(m => { console.log(m); });
    }
}