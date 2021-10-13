import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../model/employee';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(e: Employee): string {
    return `${e.gender === 'Male' ? 'Mr.' : 'Ms.'} ${e.firstname} ${e.lastname}`;
  }

}
