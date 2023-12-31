#!/usr/bin/env node
import { playGame } from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  const gameQuestionText = 'What number is missing in the progression?';

  const generateQuestionAndAnswer = () => {
    const start = generateRandomNumber(1, 50);
    const step = generateRandomNumber(1, 10);
    const progressionLength = 10;
    const hiddenIndex = Math.floor(Math.random() * progressionLength);

    const progression = generateProgression(start, step, progressionLength);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return { question, correctAnswer };
  };

  playGame(gameQuestionText, generateQuestionAndAnswer);
};

export default playProgressionGame;
