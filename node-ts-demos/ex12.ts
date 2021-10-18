import Student from './student';

const st = new Student();
const fys = st.firstYearStudents;

console.log('fys is of type: ', typeof fys);
console.log('fys instanceof Array is', fys instanceof Array)
fys.forEach(st => console.log(st))