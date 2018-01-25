import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { SupplierService } from '../Services/Supplier.Service';
import { TokenHandler } from '../Services/token.handler'

import { Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent {

    grant_type: any = "password";
   
    
    constructor(private router: Router, private httpClient: Http, private supp: SupplierService, private token: TokenHandler) {
      
    }

    Login(formData: any) {
        //debugger;
        //var da = formData;
        var da = ({ grant_type: "password", username: "admin", password: "admin" });
        //da = JSON.stringify(formData);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var data = "grant_type=password&username=" + formData.username + "&password=" + formData.password;
        this.httpClient.post("http://localhost:58582/token", data, { headers: headers }).subscribe(
            m => {
            
                var credentials = JSON.parse(m["_body"]);
                console.log(credentials);
                this.token.SetToken(credentials.access_token);
                this.router.navigate(['/']);
                
            }
        );

        //this.supp.login(formData);
    }

}
