const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  let name = answer;
  rl.question('What\'s an activity you like doing? ', answer => {
    let activity = answer;
    rl.question('What do you listen to while doing that? ', answer => {
      let music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        let meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          let dish = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            let sports = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              let superpower = answer;
              console.log(`Hi, my name is ${name}, I like listening to ${music} while ${activity}. My favourite meal is ${meal}, specifically ${dish}. I like to watch ${sports}. My superpower is ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});