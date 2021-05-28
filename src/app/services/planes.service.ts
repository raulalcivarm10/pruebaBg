import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlanes } from '../models/planes.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  
  private url: string = 'https://rolimapp.com:3000/planes';

  constructor(private http: HttpClient) { }


  getPlanes():Observable<IPlanes> {
      
    return this.http.post<IPlanes>(this.url, {
      "Headers":"x-token",
      "transaccion": "consultarPlanes"
    });

}
}
