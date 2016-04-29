var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.valueOf('X'));
console.log(now.valueOf('x'));

var timestamp=1461966805809;
var timestampMoment = moment.utc(timestamp);

timestampMoment.local();

console.log(timestampMoment.format("hh:mm a")); //11:06

/*now.subtract(1,'year');
console.log(now.format());
console.log(now.format("h:mm A"));


//Oct 5th 2015, 6:45 pm

console.log(now.format("MMM Do YYYY, h:mm a"))*/