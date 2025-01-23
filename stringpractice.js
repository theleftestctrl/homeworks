function makeFirstLetterUppercase(string){
    return string[0].toUpperCase() + string.slice(1);
}
function shortenString(string, length){
    if(string.length < length){
        return string
    }
    return string.slice(0, length) + string.slice(length).slice(0, string.slice(length).search(/[?:;!().,\s]/))+"...";
}
function checkSubstring(string, subString){
    if (string.indexOf(subString) == -1){
        return false;
    }else{
        return true;
    }
}


let text = "тестовый текст:чтобы проверять и тестировать";
let subtext = "текст";
let notSubtext = "не текст"

console.log(makeFirstLetterUppercase(text));
console.log(shortenString(text, 10));
console.log(checkSubstring(text, subtext));