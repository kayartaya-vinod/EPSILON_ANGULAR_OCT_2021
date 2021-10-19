import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: { email: (string), password: (string) } = { email: 'vinod@vinod.co', password: 'topsecret' };

  constructor(private customerService: CustomerService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (this.customerService.isLoggedIn) {
      this.router.navigate(['/'])
    }
  }

  async login() {
    let { email, password } = this.loginData;
    try {
      let resp: any = await this.customerService.login(email, password);
      sessionStorage.setItem('jwt', resp.token);
      sessionStorage.setItem('customer', resp.name);
      this.router.navigate(['/'])
    } catch (err) {
      console.log('err is', err);
    }
  }

}
