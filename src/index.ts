import { format, getDate, getHours } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const jstNow = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000)
console.log("jstNow getTimezoneOffset():", jstNow)

const utcDate = new Date()
console.log("utcDate no-format:", utcDate)
console.log("utcDate format:", format(utcDate, "yyyy-MM-dd HH:mm:ss"))
console.log("utcDate:", getDate(utcDate), getHours(utcDate))
const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo")
console.log("jstDate no-format:", jstDate)
console.log("jstDate format:", format(jstDate, "yyyy-MM-dd HH:mm:ss"))
console.log("jstDate:", getDate(jstDate), getHours(jstDate))
