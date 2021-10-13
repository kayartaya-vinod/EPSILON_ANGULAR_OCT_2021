import Person from './person';
import Employee from './employee';
import { line } from './vinutils';

let p1 = new Person('Vinod', 'vinod@viond.co');
p1.print();

line();

let e1 = new Employee(1122, 'Ramesh', 'ramesh@xmpl.com', 45000.0);
e1.print();
line();