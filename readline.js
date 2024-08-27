const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.setPrompt("Enter name: ");
// rl.prompt();

// rl.on("line", (line) => {
//   console.log(line);
// });
const askQuestion = (question, validation) => {
  const promise = new Promise((resolve) => {
    rl.question(question, (answer) => {
      if (validation(answer)) {
        resolve(answer);
      } else {
        console.log("Invalid Input please try again");
        resolve(askQuestion(question, validation));
      }
    });
  });
  return promise;
};

const notEmpty = (input) => input.trim() !== "";
const isNumber = (input) => !isNaN(input) && notEmpty(input);
const isYesOrNo = (input) => ["yes", "no"].includes(input.trim().toLowerCase());

const runQuestion = async () => {
  const name = await askQuestion("Enter name: ", notEmpty);
  const age = await askQuestion("Enter age: ", isNumber);
  const isMarried = await askQuestion("Are you married? ", isYesOrNo);
  console.log(`Name: ${name}, Age: ${age}, Married: ${isMarried}`);
  rl.close();
};
runQuestion();
rl.on("close", () => {
  console.log("Closed");
});
