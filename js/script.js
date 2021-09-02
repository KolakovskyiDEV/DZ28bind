'use strict'
// Разобраться с this - буду задавать вопросы на уроке + call, apply, bind

// Написать свою реализацию функции bind


let func = function calcValue(a, b) {
    return a + b + this.age;
}
let obj = {
    name: "Sergey",
    sureName: "Sergeech",
    age: 28,
}
let argsArray = [5, 15];


function bind(funcArg, obj, argsArray) {
    return function () {
        return funcArg.apply(obj, argsArray);
    }
};


let result = bind(func, obj, argsArray);
console.log(result());


