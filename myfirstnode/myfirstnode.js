console.log('My first log!');

// Open terminal and Run
// node myfirstnode.js

console.log('\nMy 2nd log!');

// ReferenceError: window is not defined
// Stop at this line
// console.log(window);

console.log('\nMODULE');
console.log(module);

// Access specific object
console.log(`\nACCESS SPECIFIC OBJECT`);
const myModule1 = require('./nodejs01.js');
console.log(myModule1);
console.log(myModule1.myUrl);
myModule1.display('My display');

// Access the only object
console.log(`\nACCESS THE ONLY OBJECT`);
const myModule2 = require('./nodejs02.js');
console.log(myModule2);

// Path
console.log(`\nVIEW PATH`);
const myPath = require('path');
console.log(myPath.parse(__filename));

// Os
console.log(`\nOS MEMORY`);
const myOs = require('os');
var totalMem = myOs.totalmem();
console.log(`OS Total memory is ${totalMem}`);
console.log(`OS Free memory is ${myOs.freemem()}`);

// Fs
console.log(`\nFS`);
const myFs = require('fs');
const files1 = myFs.readdirSync('./');
console.log(`FS Files1: ${files1}`);

myFs.readdir('./', function(err, files) {
   if(err) console.log(`FS Error: ${err}`);
   else console.log(`FS Files2: ${files}`);
})

// Events 
console.log(`\nEVENTS`);
const myEvents = require('events');
// Must use new key
var eventsEmitter = new myEvents();
// Listen First!!!
eventsEmitter.on('eventKey1', function(){
  console.log(`EVENTS Answer1`);
})
// Raise an emitter
eventsEmitter.emit('eventKey1');

// Another listener and emitter
eventsEmitter.on('eventKey2', function(arg){
  console.log(`EVENTS Answer2:`, arg);
})
eventsEmitter.on('eventKey2', (arg) => {
  console.log(`EVENTS Answer with arrow function:`, arg);
})
eventsEmitter.emit('eventKey2', {id: 1, infor: 'Thang Tran'});