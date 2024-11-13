// var events = require("events")

// var myEventEmitter = new events.EventEmitter();

// var eventHandler = function(){
//     console.log("event is trigred successfully!")
// }

// //bind event and event handler

// myEventEmitter.on("eventName", eventHandler);

// myEventEmitter.on('data_received', function(){
//     console.log('data received successfully.');
//  });

// myEventEmitter.emit('eventName')

// myEventEmitter.emit('data_received')

// console.log("Program Ended.")

var fs = require("fs");

// // fs.writeFile("demo.txt","Kamal Point is giving self learning content to teach the world in simple and easy way!!!!!",()=>{
// //     console.log("created")
// // })

fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data,"successfull retrivel!");
});



// console.log(global)
// console.log(globalThis === global)
// console.log(this === global)