import readlineSync from "readline-sync";

const runCli = () => {
  console.log("Welcome to the Brain Games!");

  const playerName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${playerName}!`);
};

export default runCli;
