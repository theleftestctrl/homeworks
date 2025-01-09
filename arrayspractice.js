function mySlice (array, start, end){
    let arraySliced = [];
    for (let i = start; i < end; i++){
        arraySliced.push(array[i]);
    }
    return arraySliced;
}
function myIndexOf (array, item, from){
    let arrayIndexed = [];
    let result = -1;
    for (let i = from; i < array.length; i++){
        if (item === array[i]){
            result = i;
        }
    }
    return result;
}
function myIncludes (array, item, from){
    let arrayIndexed = [];
    let result = false;
    for (let i = from; i < array.length; i++){
        if (item === array[i]){
            result = true;
        }
    }
    return result;
}
