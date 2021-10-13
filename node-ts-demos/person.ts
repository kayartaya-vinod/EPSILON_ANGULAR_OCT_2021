export default class Person {

    /**
     * Create an instance of Person class
     * @param name - of the person
     * @param email - official email of the person
     */
    constructor(private name: string = '', private email: string = '') { }

    /**
     * Prints the information about the person
     */
    print(): void {
        console.log('Name     : %s', this.name);
        console.log('Email    : %s', this.email);
    }
}