import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StorageService} from './storage.service';
import {HttpService} from './http.service';
import {Router} from '@angular/router';
import {AuthConstants} from '../config/auth-constants';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>([]);
  token: string = null;

  constructor(
      private httpService: HttpService,
      private storageService: StorageService,
      private router: Router
  ) {}

  login(postData: any): Observable<any> {
    const body = new HttpParams()
        .set('correo', postData.correo)
        .set('clave',  postData.clave);
    return this.httpService.post('validar/ingreso', body.toString());
  }

  async userData() {
    await this.storageService.get(AuthConstants.AUTH).then(res => {
      this.userData$.next(res);
    });
    return this.userData$.getValue();
  }

  logout() {
    this.storageService.clear();
    this.userData$.next('');
    this.router.navigate(['/home']);
  }
  
}
