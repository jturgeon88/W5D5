const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, (res) => {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){

  if (i == arr.length - 1) {
    // End of array reached.
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

  // If i is less than arr.length - 1, it should call askIfGreaterThan, asking the user to compare arr[i] and arr[i + 1]
  askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
    if (isGreaterThan === true) {
      const tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;

      // Update madeAnySwaps:
      madeAnySwaps = true;
    }
    
    // recursively call inner bubble sort loop:
    innerBubbleSortLoop(
      arr, i + 1, madeAnySwaps, outerBubbleSortLoop
    );
  });
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    console.log(`End of this inner loop: ${arr}`)
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  //kick off the first outer loop setting madeAnySwaps to true.
  outerBubbleSortLoop(true);

}





absurdBubbleSort([3, 8, 2, 1, 5, 4, 2], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});






