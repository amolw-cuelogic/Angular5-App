import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { SupplierService } from '../Services/Supplier.Service';


import { Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {

    grant_type: any = "password";
    constructor(private router: Router, private httpClient: Http, private supp: SupplierService) {

    }

    Login(formData: any) {
        //debugger;
        var da = formData;
        da = ({ grant_type: "password", UserName: "amol", Password: "amol" });
        //da = JSON.stringify(formData);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        this.httpClient.post("http://localhost:58582/Token", da, options).subscribe(
            m => {
                console.log(m);
                //this.router.navigate(['/']);
            }
        );

        //this.supp.login(formData);
    }

}
