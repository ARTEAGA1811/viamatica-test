import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js'
const HASH = '1b1121a014aebedf12860865c0f0f3d798adb8c7d1a38ebc386a80eb65441948'

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  constructor() {
  }

  encrypt = (data: string) => {
    return CryptoJS.AES.encrypt(data, HASH).toString()
  }

  decrypt = (encrypted: string) => {
    return CryptoJS.AES.decrypt(encrypted, HASH).toString(CryptoJS.enc.Utf8)
  }
}
