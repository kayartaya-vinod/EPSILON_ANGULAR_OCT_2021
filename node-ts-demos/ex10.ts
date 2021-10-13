
function Color(params: { a: number, b: number }) {
    console.log('@Color evaluated with params:', params);

    return function (target, propertyKey: string) {
        console.log('arguments', arguments)
    }
}

class Test {

    @Color({ a: 1, b: 2 })
    greet(name: string): void {
        console.log(`Hello, ${name}`);
    }

    @Color({ a: 12, b: 23 })
    welecome(name: string): void {
        console.log(`Welcome, ${name}`);
    }

}
