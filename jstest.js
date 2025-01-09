function guess(num) {
    let maxnumber = 100;
    let minnumber = 1;
    let guessnum = 101;
    while (guessnum != num) {
        guessnum = Math.floor((maxnumber + minnumber)/2);
        console.log ("Компьютер 2: Пробую число ", guessnum)
        if (guessnum > num){
            console.log ("Компьютер 1: Меньше")
            maxnumber = guessnum;
        } else if (guessnum < num){
            console.log ("Компьютер 1: Больше")
            minnumber = guessnum;
        }
    }
    console.log ("Компьютер 1: Угадал!")
}
let randnum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log ("Компьютер 1: Загадал число ", randnum);
guess(randnum);