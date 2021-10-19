import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { loginUrl } from 'src/app/urls';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  loggedInCustomerName: (string | undefined | null);

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(email: string, password: string): Promise<any> {
    return this.httpClient
      .post(loginUrl, { email, password })
      .toPromise();
  }

  get isLoggedIn(): boolean {
    this.loggedInCustomerName = sessionStorage.getItem('customer');
    return 'jwt' in sessionStorage;
  }

  logout(): void {
    sessionStorage.clear();
    this.loggedInCustomerName = undefined;
    this.router.navigate(['/customer/login'])
  }
}
