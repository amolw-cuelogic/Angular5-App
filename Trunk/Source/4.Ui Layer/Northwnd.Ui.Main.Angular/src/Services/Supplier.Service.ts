import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SupplierService {

    url: any = 'http://localhost:58582/api/supplier/GetSupplier';
    constructor(private http: Http) {

    }

    GetSupplierList() {
        return this.http.get(this.url).map(result => result.json());
    }

    //GetPostAsPerId(Id: any) {
    //    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + Id).map(result => result.json());
    //}

}