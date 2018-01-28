//Simple myBind with no args:

Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// boundTurnOn(); // should say "Turning on a lamp"


const myBoundTurnOn = turnOn.myBind(lamp);
myBoundTurnOn(); // should say "Turning on a lamp"






// //myBind with args:

// Function.prototype.myBind = function (context, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(context, bindArgs.concat(callArgs));
//   };
// }
