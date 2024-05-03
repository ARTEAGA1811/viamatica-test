import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.dev";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ISignInModel, ITokenResponse } from "src/app/models/auth.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static BASE_URL = `${environment.baseUrlApi}`;
  signInUrl = `${AuthService.BASE_URL}${environment.auth}/authenticate`;

  constructor(private http: HttpClient) { }

  signIn(creedentials: ISignInModel) {
    return this.http.post<ITokenResponse>(this.signInUrl, creedentials, { observe: 'response' });
  }

  test(): Observable<HttpResponse<any>> {
    return this.http.get(`${AuthService.BASE_URL}/test`, { observe: 'response' });
  }

}
