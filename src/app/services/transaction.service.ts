import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }
    private http = inject(HttpClient);

    BASE_URL = signal('http://localhost:8080');


    createTransaction(form:any){
      return this.http.post(`${this.BASE_URL()}/api/v1/transaction`, form);
    }
}
