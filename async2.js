const fs = require("fs");
// const process = require("process")

const a = 1000;

setImmediate(() => console.log("setImmediate"));



fs.readFile("./demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("file data: ", data);
});

setTimeout(() => {
  console.log("settimeout");
}, 0);
process.nextTick(() => {
    Promise.resolve("promise").then(console.log)
  process.nextTick(() => console.log("inner nextTicl"));
  
  console.log("process.nextTick");
});

const myPromise = new Promise((resolve, reject) => {
    if (resolve) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  });
  
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

function printA(a) {
  console.log(a);
}

printA(a);

console.log("Last line of the code");
