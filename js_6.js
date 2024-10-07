// Generate a 6-digit alpha-numeric code

function otp(length){
    let chr='tirumalaprasad0123456789';
    let code='';
    for(let i=0;i<length;i++){
        let rn=Math.floor(Math.random()*chr.length);
        code += chr[rn]
    }
    return code;
}
let sixdig=otp(6)
console.log(sixdig);

// caliculate days of given age

let today=new Date()
let day=today.getDay()
// console.log(day)
let age=prompt("Enter your age then i will say how many days you lived")
function ages(){
    console.log((age*365.25).toFixed(0))
}
ages()

// difference b/w two dates and return days,months,years

function datediff(startDate,endDate){
    let yrs=startDate.getFullYear()-endDate.getFullYear()   // present year(2024) - given year(2003)
    let month=startDate.getMonth()-endDate.getMonth()      // present month(10)  - given month(12)
    let days=startDate.getDate()-endDate.getDate()        // present date(6) - given date(10)
    return{
        years:Math.abs(yrs),
        months:Math.abs(month),
        day:Math.abs(days)
    };
}

let date1=new Date()                  // gives present date
let date2=new Date("2003-8-9")      // your own date
let diff=datediff(date1,date2)        // difference b/w dates
console.log(diff.years)
console.log(diff.months)
console.log(diff.day)

// shortend answer(o/p) in one line
// console.log(`Difference: ${diff.years} years, ${diff.months} months, and ${diff.day} days.`)



