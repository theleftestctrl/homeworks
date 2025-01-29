function myFilter(array, callback) {
    let newarray = []
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])){
            newarray.push(array[i]);
        }
    }
    return newarray;
  }

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers); 

const greaterThanThree = myFilter(numbers, num => num > 3);
console.log(greaterThanThree);