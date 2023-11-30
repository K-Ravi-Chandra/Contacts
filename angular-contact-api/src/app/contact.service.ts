import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const requestHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Keep the localhost path which the running Swagger shows after running the Visual Studio 2022. 

  api_path: string = 'http://localhost:5073/api/Contact';
  constructor(private http: HttpClient) { }


  // Now ,these Functions will take the Swagger output & Use them for Frontend.

  getAll(): Observable<Contact[]> //return list of Contacts in the form of observable type
  {
    return this.http.get<Contact[]>(this.api_path + '/GetAll', { headers: requestHeaders })
  }
  get(id?: number): Observable<Contact> {
    return this.http.get(this.api_path + '/GetContact/' + id, { headers: requestHeaders });
  }
  add(contact: Contact): Observable<any> {
    return this.http.post(this.api_path + '/AddContact', contact, { headers: requestHeaders });
  }
  delete(id?: number): Observable<any> {
    return this.http.delete(this.api_path + '/DeleteContact/' + id, { headers: requestHeaders });
  }
  edit(contact: Contact): Observable<any> {
    return this.http.put(this.api_path + '/EditContact', contact, { headers: requestHeaders });
  }
}
