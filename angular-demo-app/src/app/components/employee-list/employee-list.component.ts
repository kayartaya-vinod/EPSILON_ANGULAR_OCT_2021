import { Component } from '@angular/core';
import { Employee } from '@model/employee';
import data from 'src/employees.json';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {


  employees: Employee[] = data;
  start: number = 0;
  pageSize: number = 10;
  end: number = this.pageSize - 1;

  nextPage() {
    this.start += this.pageSize
    this.end += this.pageSize
  }

  prevPage() {
    this.start -= this.pageSize
    this.end -= this.pageSize
  }
}
