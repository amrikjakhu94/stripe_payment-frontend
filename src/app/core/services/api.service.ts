import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link : String = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  confirmPayment(token : Object):Observable<any> {
    return this.http.post(`${this.link}/confirmpayment`,token);
  }

}
