import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { IResponseProductos } from '../models/response.productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = ' https://rolimapp.com:3000/productos';

  constructor(private http: HttpClient) { }

  getProductos():Observable<IResponseProductos> {
      
    return this.http.post<IResponseProductos>(this.url, {
      "transaccion": "generico",
      "tipo": "4"
    });
  }
}
