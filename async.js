const fs = require("fs");
const https = require("https");

console.log("Hello Node.js");


var a = 3840384093;
var b = 9323435;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully",res.data);
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);
fs.readFileSync("./demo.txt", "utf8");
console.log("hi")
fs.readFile("./demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("file data: ", data);
});

function multiply(x, y) {
  const result = x * y;
  return result;
}

var c = multiply(a, b);
console.log(c);
