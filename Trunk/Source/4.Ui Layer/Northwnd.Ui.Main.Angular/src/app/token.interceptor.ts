
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { TokenHandler } from './token.handler'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private tokenhandler: TokenHandler) { }
    token: any;
    authReq: any;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //Clone the request to add the new header.
      
        this.authReq = req.clone({ headers: req.headers.set("Authorization", "Bearer ") });

        //send the newly created request
        return next.handle(this.authReq)
            .catch((error, caught) => {
                debugger;

                this.token = this.tokenhandler.GetToken();
                if (this.token == null || this.token == undefined) {
                    this.router.navigate(['/login']);
                    //return Observable.throw('Not Logged In.');

                }

                //intercept the respons error and displace it to the console
                console.log("Error Occurred");
                if (error.status == 401 || error.status == 0) {
                    this.router.navigate(['/login']);
                }
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}



