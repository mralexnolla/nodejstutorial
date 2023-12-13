//on and emit mthods
// keep track of the order
// additional arguments

const EvenetEmiiiter = require("events");

const customeEvent = new EvenetEmiiiter();

customeEvent.on("response", (name, id) => {
  console.log(`data name: ${name} and id: ${id}`);
});

customeEvent.on("response", () => {
  console.log("Adding an event");
});

customeEvent.emit("response", "George", 22);
