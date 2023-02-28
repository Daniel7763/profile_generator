const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  console.log(`oh cool, My great uncle married a ${answer}`);

  (answerString += answer);

  rl.question("What's an activity you like doing? ", (answer1) => {
    console.log(`Whoa, Mr.Talented over here`);
    (answerString += answer1);

    rl.question("What do you listen to while doing that? ", (answer2) => {
      console.log(`how mysterious`);
      (answerString += answer2);

      rl.question("Which meal is your favourite? ", (answer3) => {
        console.log(`I dont think they call it that in France`);
        (answerString += answer3);

        rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
          console.log(`not my first choice but I appreciate your open mind!`);
          (answerString += answer4);

          rl.question("Which sport is your absolute favourite? ", (answer5) => {
            console.log(`you must be ready for the olympics then!`);
            (answerString += answer5);

            rl.question("What is your superpower? ", (answer6) => {
              console.log(`How imaginative`);
              (answerString += answer6);

              console.log("What's your name?: " + answer + "\nWhat do you listen to while doing that? " + answer1 + "\nwhich meal is your favourite? " + answer2 + "\nWhat's your favourite thing to eat for that meal? " + answer3 + "\nWhich sport is your absolute favourite? " + answer4 + "\nWhich sport is your absolute favourite? " + answer5 + "\nWhat is your superpower? " + answer6);
              rl.close();
            });
          });
        });
      });
    });
  });
});
