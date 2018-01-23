import { Injectable } from '@angular/core';

@Injectable()
export class TokenHandler {

    SetToken(token: any) {
        localStorage.setItem("access-token", token);
    }

    GetToken() {
        var token = localStorage.getItem("access-token");
        return token;
    }

}
