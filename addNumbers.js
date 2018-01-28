const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please provide a number:", (res) => {
      const parsed = parseInt(res);
      sum += parsed;
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    })
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(2, 5, sum => console.log(`Total Sum: ${sum}`));
