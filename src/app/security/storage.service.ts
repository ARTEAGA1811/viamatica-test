import { Injectable } from '@angular/core';
// import { IdentityModel } from '../../api/auth/auth.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { CryptoService } from './crypto.service';
import { ITokenResponse } from '../models/auth.model';

const KEY: string = 'auth';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private cryptoService: CryptoService) {
  }

  private read = (): ITokenResponse | null => {
    let data = null;
    if(window.sessionStorage.getItem(KEY)){
      data = window.sessionStorage.getItem(KEY)
    }else if(window.localStorage.getItem(KEY)){
      data = window.localStorage.getItem(KEY)
    }

    if (data && data !== '') {
      return JSON.parse(this.cryptoService.decrypt(data));
    }
    return null
  }

  store = (data: ITokenResponse | null, rememberMe: boolean) => {
    this.removeAuth()
    if (rememberMe) {
      window.localStorage.setItem(KEY, this.cryptoService.encrypt(JSON.stringify(data)));
    } else {
      window.sessionStorage.setItem(KEY, this.cryptoService.encrypt(JSON.stringify(data)));
    }
  }

  removeAuth = () => {
    window.localStorage.removeItem(KEY)
    window.sessionStorage.removeItem(KEY)
  }

  isAuth = () => !!this.read()?.token
  // getId = () => this.read()?.user.id
  // getAuthorities = () => this.read()?.user.roles
  getToken = () => this.read()?.token
  getUsername = () => this.read()?.username


}
