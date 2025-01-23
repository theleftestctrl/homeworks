function objectsum (obj){
    let sum = 0;
    for (key in obj){
        if (typeof obj[key] == "number"){
            sum += obj[key];
        }
    }
    return sum;
}

function objectkeynamessorted (obj){
    let names = [];
    const sortedObj = Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));
    for (key in sortedObj){
            names.push(key);
    }
    names.reverse();
    return names;
}

let test = {
    testnum1: 2,
    testnum2: 30,
    testnum3: 50,
    testnum4: 20
}

console.log(objectsum(test));
console.log(objectkeynamessorted(test));