import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.interface';
import { IResponse } from '../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  //private url: string = 'https://localhost:44378/api/usuario';
  private url: string = ' https://rolimapp.com:3000/usuarios';

  constructor(private http: HttpClient) { }

  onLogin(form: ILogin):Observable<IResponse> {
      
      return this.http.post<IResponse>(this.url, {
        transaccion: "autenticarUsuario",
        datosUsuario: form
      });
  }
}
