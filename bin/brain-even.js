#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const giveAnswer = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

giveAnswer();
