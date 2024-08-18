console.log('hello')


// Date.now

// 1) Task: Use Date.now to get the current timestamp in milliseconds since the Unix Epoch.
console.log(Date.now())

// 2) Task: Write a function that uses Date.now to measure the time it takes to execute a function.

let arr = new Array(100).fill().map((_, index) => index+1)

const calc = () => {
    let sd = new Date()
    arr.forEach((item) => console.log())
    let ed = new Date()
    console.log(ed-sd)
}
calc()


// getDate()

// 1) Question 1: Get Timestamp of a Specific Date
console.log(new Date().getTime())

// 2) Task: Given two date objects, use getTime to calculate the difference between them in days.
let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-10');
console.log(date2.getDate() - date1.getDate())

// 3) Question 3: Get Time Elapsed Since a Specific Date
console.log(new Date().getFullYear() - date1.getFullYear())

// 4) Task: Write a function that converts a given timestamp to a readable date format.
console.log(new Date(1723809046719))

// 5) Task: Given two dates, use getTime to determine which one is earlier.
let date3 = new Date('2024-01-01');
let date4 = new Date('1990-12-31');

let dateArr = new Array(date3.getTime(), date4.getTime())
dateArr.sort((a, b) => a - b)
console.log(dateArr[0])

// getFullYear()

// 1) Task: Use getFullYear to get the current year
console.log(new Date().getFullYear())

// 2) Task: Write a function that takes a date string as input and returns the year using getFullYear.
let dateString = "2024-07-15";
console.log(new Date(dateString).getFullYear())

// getMonth()

// 1) Task: Use getMonth to get the current month (0-11).
console.log(new Date().getMonth())

// 2) Task: Write a function that determines the quarter (1-4) of the year for a given date using getMonth.
let dateString1 = "2024-10-10";
let month = new Date(dateString1).getMonth()
console.log(Math.ceil((month+1)/3))

// getDate()

// 1) Task: Use getDate to get the day of the month (1-31) for a given date.

let date = new Date('2024-01-15');
console.log(date.getDate())

// 2) Task: Given a date, calculate the number of days left in that month using getDate.

let date5 = new Date('2024-07-15');
let daysInCurrentMonth = date5.getDate()
console.log(daysInCurrentMonth)

// 3) Task: Write a function that checks if the day of the month is a weekend using getDate.

let date6 = new Date('2024-07-20'); // A Saturday
console.log(date6.getDay() === 0 || date6.getDay() === 6)


// toISOString()

// 1) Task: Use toISOString to convert a given date to a string in ISO 8601 format.
let date7 = new Date('2024-01-01T12:00:00Z');
console.log(date7)
 

// toLocaleDateString()

// 1) Question 1: Convert Date to Locale Date String

let date8 = new Date(2024, 7, 16); 
let date9 = date8.toLocaleDateString('en-us')
console.log(date9)


// 2) Task: Write a function that formats a date to exclude the year using toLocaleDateString.

let date10 = new Date(2024, 7, 16); 
let date11 = date8.toLocaleDateString('en-us', {year: undefined,month: 'numeric', day: 'numeric'})
console.log(date11)

// toLocaleTimeString()


// 1) Task: Use toLocaleTimeString to convert a given date's time to a string based on the locale settings.

let date12 = new Date('2024-01-01T12:30:00'); 
let date14 = date12.toLocaleTimeString()
console.log(date14)

// 2) Task: Write a function that formats the time of a date in a specific locale (e.g., "de-DE" for Germany) using toLocaleTimeString.
let date15 = new Date('2024-01-01T02:30:00');
let date16 = date15.toLocaleTimeString('en-US')
console.log(date16)

// 3) Task: Use toLocaleTimeString to format the time with options (e.g., hour12, hour, minute, second).
let date18 = new Date('2024-01-01T02:30:00');
let date19 = date18.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})
console.log(date19)