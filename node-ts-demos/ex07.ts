import { line } from './vinutils';

menu();

function menu() {
    menuoption("1. Add");
    menuoption("2. Subtract");
    menuoption("3. Multiply");
    menuoption("4. Divide");
    line();
}

function menuoption(txt: string): void {
    console.log(txt);
}