import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

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

    UpdateSupplier(formData: any) {
        var da = JSON.stringify(formData);
        console.log(da);
        //this.http.post(this.url + 'SaveSupplier', formData).map(result => result.json());

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'PostSaveSupplier', da, options).toPromise()
            .then()
            .catch(this.handleErrorPromise);
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);

    }

    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	

}