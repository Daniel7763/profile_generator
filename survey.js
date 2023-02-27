const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  console.log(`My great uncle married one of thoes`);

  rl.question("What's an activity you like doing? ", (answer1) => {
    console.log(`Whoa, Mr.Talented over here`);

    rl.question("What do you listen to while doing that? ", (answer2) => {
      console.log(`how mysterious`);

      rl.question("Which meal is your favourite? ", (answer3) => {
        console.log(`I dont think they call it that in France`);

        rl.question("What's your favourite thing to eat for that meal? ", (answer4) => {
          console.log(`not my first choice but I appreciate your open mind!`);

          rl.question("Which sport is your absolute favourite? ", (answer5) => {
            console.log(`you must be ready for the olympics then!`);

            rl.question("What is your superpower? ", (answer6) => {
              console.log(`How imaginative`);
            
              rl.close();
            });
            rl.close();
          });
          rl.close();
        });
        rl.close();
      });
      rl.close();
    });
    rl.close();
  });
  rl.close();

  
});