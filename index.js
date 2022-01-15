console.log("Hello world");



///Asynchronous javascript 
//More than 1 task running simultaneously

///Synchronous waiting for the 1 task to get completed

///Ajax helps in fetching data asynchronously without interferring with existing page

///Ajax is asynchronous javascript and XML

///Ajax uses xhr object which is also know as XMLHttpRequest Object

setTimeout(()=>{

    for (let index = 0; index < 4000; index++) {
        console.log(index);
    }

}, 100);

console.log("Hello\n");