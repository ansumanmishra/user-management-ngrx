import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = this.http.get('https://jsonplaceholder.typicode.com/users').pipe();

  constructor(private http: HttpClient) {

   }
}
