import readlineSync from 'readline-sync';

function hello() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
}

export { hello as default };
