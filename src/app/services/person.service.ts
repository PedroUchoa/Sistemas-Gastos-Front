import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private http = inject(HttpClient);

  BASE_URL = signal('http://localhost:8080');

  getPersons(page: number, limit: number): Observable<any> {
    const params = { page: page.toString(), limit: limit.toString() };
    return this.http.get<any>(`${this.BASE_URL()}/api/v1/person`, { params });
  }

  addPerson(form: any) {
    return this.http.post(`${this.BASE_URL()}/api/v1/person`, form);
  }

  removePerson(personId: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };

    return this.http.delete(
      `${this.BASE_URL()}/api/v1/person/${personId}`,
      options
    );
  }

  editPerson(personId: string, form:any){
    return this.http.put(`${this.BASE_URL()}/api/v1/person/${personId}`,form)
  }

}
