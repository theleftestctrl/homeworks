function createLogger(){
    let messages = [];

    let logger = {
        log: function (message){
            messages.push(message);
        },
        getLogs: function (){
            console.dir(messages);
        }
    }
    return logger;
}

function createRandomGenerator(min, max){
    return function randomGenerator(){
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}

const logger = createLogger();
logger.log("test1");
logger.log("test2");
logger.getLogs();  

const generator = createRandomGenerator(4, 10);
console.log(generator());
console.log(generator());
console.log(generator());



  