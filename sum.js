const https = require("https")

var a = 3840384093
var b = 9323435;

https.get("https://dummyjson.com/products",(res)=>{
    console.log(res.json())
})

function multiply(x,y){
    const result = x*y;
    return result
}

var c= multiply(a,b)
console.log(b)