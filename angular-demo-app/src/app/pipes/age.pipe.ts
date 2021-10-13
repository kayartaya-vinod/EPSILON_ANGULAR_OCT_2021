import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dt: (string | undefined), flag: number = 1): string {
    if (!dt) return '';

    let dob = new Date(dt);
    let diff = Date.now() - dob.getTime();
    let ageDate = new Date(diff);

    let y, m, d;
    y = ageDate.getFullYear() - 1970;
    m = ageDate.getMonth();
    d = ageDate.getDate();

    switch (flag) {
      case 1:
        return `(${y} years, ${m} months and ${d} days)`;
      case 2:
        return `(${y} years and ${m} months)`;
      default:
        return `(${y} years)`;
    }
  }

}
