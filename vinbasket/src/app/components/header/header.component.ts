import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '@service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public customerService: CustomerService,
    private ts: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(lang: string): void {
    this.ts.use(lang);
  }

}
