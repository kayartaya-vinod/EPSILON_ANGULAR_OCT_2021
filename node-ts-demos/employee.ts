import Person from './person';

// Employee IS-A Person
class Employee extends Person {

    // a constructor in the subclass must always invoke the constructor of the superclass
    constructor(private id: number = 0,
        name: string = '',
        email: string = '',
        private salary: number = 0) {
        super(name, email);
    }

    // method overriding (function of superclass, re-written in subclass)
    print(): void {
        console.log('Id       : %s', this.id);
        super.print();
        console.log('Salary   : %s', this.salary);
    }
}

export default Employee;