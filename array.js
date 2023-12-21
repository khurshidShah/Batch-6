// array method
// index reverse
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let arrayRev = array.reverse();
console.log(array);
// array concat
const per = ['name', 'class', 'section'];
const per1 = ['roll_no', 'phone_number', 'contact'];
const bothInfo = per.concat(per1);
console.log(bothInfo);

// array toString
let detail = ['03446055207'];
console.log(typeof (detail));
const detailtoString = detail.toLocaleString()
console.log(typeof (detailtoString))
console.log(detailtoString);
// array push method



// MAP FILTER AND REDUCE METHOD IN JS
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const double = number.map(item => item * 2);
console.log(double);
console.log(number);
const filterNumber = number.filter(item => item === 2);
console.log(filterNumber);
const filterNumbers = number.filter(item => item % 2 === 0);
console.log(filterNumbers);

const result = [
    { person1: '', number: 70 },
    { person2: '', number: 80 },
    { person3: '', number: 90 },
]
const HightMatch = result.filter(person => person.number > 60);
console.log(HightMatch);

// array with reduce method
const array7 = [1, 2, 3, 45, 6];
const reduceNUmber = array7.reduce(function (item, result) {
    return item + result;
}, 0)
console.log(reduceNUmber);