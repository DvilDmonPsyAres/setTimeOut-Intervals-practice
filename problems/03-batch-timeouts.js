/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.

Example:

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
***********************************************************************/

function batchTimeouts(callbacks, delays) {

//   let newArr = [];
//   for(let i = 0; i < callbacks.length; i++) {
//     let cb = callbacks[i];
//     let del = delays[i];
//     let objs = setTimeout(cb, del);
//     newArr.push(objs)
//   }
//   return newArr;
// }
  let newArr= [];
  if(callbacks.length === 0) {
    return [];
  }
  if(callbacks) {
    let del = delays[0];
    let cb = callbacks[0];
    let obj = setTimeout(cb, del);
    newArr.push(obj);
    let cbs = callbacks.slice(1, callbacks.length);
    let dels = delays.slice(1, delays.length);
    return batchTimeouts(cbs, dels);
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = batchTimeouts;
} catch {
  module.exports = null;
}
