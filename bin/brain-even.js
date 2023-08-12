#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const playerName = readlineSync.question();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (
      (isEven(randomNumber) && userAnswer === 'yes') ||
      (!isEven(randomNumber) && userAnswer === 'no')
    ) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${
          isEven(randomNumber) ? 'yes' : 'no'
        }'.`,
      );
      console.log("Let's try again!");
      return;
    }
  }

  console.log('Congratulations!');
};

playEvenGame();
