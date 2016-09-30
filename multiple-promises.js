require('es6-promise');
'use strict';

 function all(a, b) {
  return new Promise(function(fulfill, reject) {
    var counter = 0;
    var output = [];

    a.then((value) => {
      output[0] = value;
      counter++;

      if (counter >= 2) {
        fulfill(output);
      }
    });

    b.then((value) => {
      output[1] = value;
      counter++;

      if (counter >= 2) {
        fulfill(output);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
