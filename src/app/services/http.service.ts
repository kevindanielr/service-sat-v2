import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  options = { headers: this.headers, withCredentials: false };

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, data, this.options);
    // return this.http.post(url, JSON.stringify(data), this.options);
  }

  delete(serviceName: string) {
    const url = environment.apiUrl + serviceName;
    return this.http.delete(url);
  }


  get(serviceName: string): Observable<any> {
    const url = environment.apiUrl + serviceName;
    return this.http.get(url);
  }
}
