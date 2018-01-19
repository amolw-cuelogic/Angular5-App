import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class SupplierService {

    url: any = 'http://localhost:58582/api/supplier/';
    constructor(private http: Http, private router: Router) {

    }

    GetSupplierList() {
        return this.http.get(this.url + 'GetSupplierList').map(result => result.json());
    }

    GetSupplierPerId(id: any) {
        return this.http.get(this.url + 'GetSupplierDetails/' + id.toString()).map(result => result.json());
    }

    UpdateSupplier(formData: any) {
        var da = JSON.stringify(formData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + 'PostSaveSupplier', da, options).toPromise()
            .then(m => {
                if (m.statusText == 'OK')
                    this.router.navigate(['/']);
            })
            .catch(this.handleErrorPromise);
    }

    DeleteSupplier(SupplierId: any) {
        debugger;
        return this.http.delete(this.url + 'DeleteSupplier/' + SupplierId.toString()).toPromise()
            .then(m => {
                if (m.statusText == 'OK')
                    this.router.navigate(['/']);
            })
            .catch(this.handleErrorPromise);
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);

    }

    private handleErrorPromise(error: Response | any) {
        console.log(error._body);
        alert(error._body);
    }

}