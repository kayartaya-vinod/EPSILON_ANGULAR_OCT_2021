import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: { email: (string), password: (string) } = { email: '', password: '' };

  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
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
      this.activatedRoute.queryParams.subscribe(qp => {
        let { redirectTo } = qp;
        if (!redirectTo) {
          redirectTo = '/'
        }
        this.router.navigate([redirectTo])
      })
    } catch (err) {
      console.log('err is', err);
    }
  }

}
