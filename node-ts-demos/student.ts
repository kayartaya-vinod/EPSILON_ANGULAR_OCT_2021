export default class Student {

    constructor(private name: string = '', private sgpa: number = 0) { }

    get firstYearStudents() {
        return [
            new Student('Ramesh', 9.4),
            new Student('Harish', 9.2),
            new Student('Suresh', 9.5),
            new Student('Rajesh', 9.8)
        ]
    }
}