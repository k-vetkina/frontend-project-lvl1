import readlineSync from 'readline-sync';

export function hello() {
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
}

