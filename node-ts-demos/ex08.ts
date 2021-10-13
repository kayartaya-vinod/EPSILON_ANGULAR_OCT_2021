import { sleep } from './vinutils';



console.log('start of script');
// invoke(hello, 5000);
setTimeout(hello, 0);
console.log('going to sleep for 5s');
sleep(5000);
console.log('end of script');


function hello() {
    console.log('Hello, world');
}