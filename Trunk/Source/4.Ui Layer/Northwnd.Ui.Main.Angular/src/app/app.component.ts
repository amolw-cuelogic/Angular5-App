import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenHandler } from "../Services/token.handler"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    constructor(private router: Router, private httpClient: HttpClient, private token: TokenHandler) {
        
    }

    Logout() {
        this.httpClient.post("http://localhost:58582/api/Account/Logout", null).subscribe(
            m => {
                
                this.router.navigate(['/login']);
                this.token.SetToken("");
            }
        );
    }
}