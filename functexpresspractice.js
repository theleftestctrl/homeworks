function simpleCalculate(a, action, b){
    return action(a, b);
}

const plus = function(a, b){
    return a+b;
}
const minus = function(a, b){
 return a-b;
}
const divide = function(a, b){
    return a/b;
}
const multiply = function(a, b){
    return a*b;
}

console.log(simpleCalculate(3, multiply, 4))
console.log(simpleCalculate(20, divide, 4))
console.log(simpleCalculate(9, plus, 15))
console.log(simpleCalculate(100, minus, 25))

