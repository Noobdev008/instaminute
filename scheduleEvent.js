const schedule = require("node-schedule"); // Calling node-schduler
const {reverseString} =  require('./reverse'); //Calling reverseString function


const takingTime = (ms) => new Promise((res) => setTimeout(res, ms)); //Here i am making a promise with a timeout at element.length*1000 milliseconds


//<---------Making SchedularEvent function--------->//
function scheduleEvent(element) {
    let date = new Date(element)           // For present date


    let length = (element.text.length) * 1000   //this is represent to the length of the string  and 1000 represent milisecond 
    // console.log(length)


    // console.log("before takingTime")
    const task = schedule.scheduleJob(date, async function () {   //In this function using Node-schedule  and inbit method schedileJob
        task.cancel()                             // for exiting the loop when the task is over or stopped
        // console.log("inside task")
        await takingTime(length).then(() => {
            console.log(reverseString(element.text));
            // console.log("inside takingTime")
        });
    });
    // console.log("outer takingTime")

    //<---------If task has no value or error --------->//


    if (task == null) {                        // If the value is not satisfactory then it will show this error
        console.log(`Please Enter valid Time`);
    }
}


module.exports = { scheduleEvent }