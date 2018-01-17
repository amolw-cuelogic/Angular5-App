import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SupplierService {

    url: any = 'http://localhost:58582/api/supplier/';
    constructor(private http: Http) {

    }

    GetSupplierList() {
        return this.http.get(this.url + 'GetSupplierList').map(result => result.json());
    }

    GetSupplierPerId(id: any) {
        return this.http.get(this.url + 'GetSupplierDetails/' + id.toString()).map(result => result.json());
    }

}