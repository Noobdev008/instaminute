const { api } = require("./api");  // calling api.js
const {scheduleEvent} = require("./scheduleEvent") // calling scheduleEvent


//Note: I console everywhere just debugging my code  :)


//<--------- Using Loop-------->//

// console.log("before item")
api.forEach((element) => {           // It will go and check each and every item
    scheduleEvent(element);
    // console.log("inside api")
});
// console.log("after api")




//<----------------------Code End--------------------->//