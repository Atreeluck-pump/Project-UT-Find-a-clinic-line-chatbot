const moment = require('moment')

//const time = moment().locale('th').format('21/7/2019')
// console.log(time)


// const date = require('date-and-time');
// const now = new Date();
// console.log(date.format(now, 'D/M/YYYY'))

const vv = '21/7/2019'.split('/')
const pp = vv[1]+"/"+vv[0]+"/"+vv[2]
console.log(pp)
var timeStamp1 = new Date('21/7/2019').getTime()
//console.log(timeStamp1)

var wordcut = require('wordcut')
wordcut.init()
const test = 'จิตเวชเด็ก & วัยรุ่น จิตเวชและโรคทั่วไป'
const storeCut = wordcut.cut(test)
console.log(storeCut)