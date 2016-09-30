require('es6-promise');
'use strict';

var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE!'));
});

promise.catch(function(err) {
  console.log(err.message);
});

var promise = Promise.resolve('YOU DID IT!');
var promise = Promise.reject('NO WAY!');

// The first shortcut is .catch. So far we already know how to handle the rejection of a promise -- through the second parameter to .then function. However, sometimes you only want to handle the rejection and not success. In these cases, since the onFulfilled callback is optional, you can specify null in place of it.  However, a much easier way to achieve this is to use .catch.
// Instead of having to write
//
//   promise.then(null, function (err) {
//     console.error('THERE IS AN ERROR!!!');
//     console.error(err.message);
//   });
//
// You could simply write
//
//   promise.catch(function (err) {
//     console.error('THERE IS AN ERROR!!!');
//     console.error(err.message);
//   });

// The second and third are Promise.resolve and Promise.reject. The code examples below will tell you exactly what they do:

      // The way you have learned: create promise through the constructor.

    // var promise = new Promise(function (fulfill, reject) {
    //   fulfill('SECRET VALUE');
    // });

      // Introducing: Promise.resolve
      // It does the exact same thing as above:

    // var promise = Promise.resolve('SECRET VALUE');

      // Likewise...

    // var promise = new Promise(function (fulfill, reject) {
    //   reject(new Error('SECRET VALUE'));
    // });

    // var promise = Promise.reject(new Error('SECRET VALUE'));
