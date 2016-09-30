require('es6-promise');
'use strict';

// The ES2015 spec declares that promises must not fire their
// resolution/rejection function on the same turn of the event loop that they are created on. This is very important because it eliminates the possibility of execution order varying and resulting in indeterminate outcomes.
//
// You can expect that the functions passed to the then method of a
// promise will be called on the next turn of the event loop.

var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
  // reject(new Error('I DID NOT FIRE!'));
});

promise.then(console.log, null);
console.log('MAIN PROGRAM');
