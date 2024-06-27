import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseURL = 'https://localhost:44386/api/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseURL + 'account/login', model);
  }
}
