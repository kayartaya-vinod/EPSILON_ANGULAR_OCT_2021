// this is a module named "vinutils"


// this is a function, which is local/private to this module. Cannot be accessed elsehwere.
function info(): void {
    console.log('Module name: vinutils');
    console.log('Method name: info');
}

// this is a named export; can be accessed from other modules
export function line(char: string = '-', times: number = 50) {
    let ln = '';
    for (let i = 0; i < times; i++) {
        ln += char;
    }
    console.log(ln);
}


export const square = function (num: number): number {
    return num * num;
}

export function sleep(duration: number = 1000): void {
    let startTime = Date.now(); // current time in millis
    while ((Date.now() - startTime) <= duration);
}

export function invoke(fn: any, duration: number = 1000): void {
    if (typeof fn !== 'function') throw 'First argument expected to be a function!';

    sleep(duration); // wait
    fn();   // and execute
}
