const moment = require('moment');

// const date = new Date();

// console.log(date.getMonth());

var createdAt = 1234

const date = moment(createdAt);
date.add(1, 'years');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));