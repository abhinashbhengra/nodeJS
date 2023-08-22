const EventEmitter = require("events");
// we require events and store in variable
// EventEmitter which is essentially a Class

const customEmitter = new EventEmitter(); // create a Instance
// on - listen for an event
// emit - emit an event

// customEmitter.emit("response"); // orders matters
customEmitter.on("response", (name, age) => {
  console.log("data received");
  console.log(`Data : name:${name} age:${age}`);
});

// we can add as many method we want
customEmitter.on("response", () => {
  console.log("data updated");
});

// order matters

// we can pass an argument when we are emitting an event
// and can accepts that on callbacks

customEmitter.emit("response", "abhinash", 22);

// Even though we are not gonna write our own events
// events are core building block of node
