import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.dev";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { IUser } from "src/app/models/user.model";

type EntityResponseType = HttpResponse<IUser>;
type EntityArrayResponseType = HttpResponse<IUser[]>;

@Injectable()
export class UserService {
  static BASE_URL = `${environment.baseUrlApi}`;
  userUrl = `${UserService.BASE_URL}${environment.users}`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<EntityArrayResponseType> {
    return this.http.get<IUser[]>(this.userUrl, { observe: 'response' });
  }

}
