console.log('i am object');
// object method
let user_info = {
    name: 'khurshid',
    class: '4th',
    email: 'rba@gmail.com',
}
user_info.address = 'masjidui',
    console.log(user_info);
console.log(typeof (user_info));

const perDetail_per = {
    per1: ['name', 'class', 'section'],
    per2: 'emial',
    section: 'b_section',
}

const per1 = ['name', 'class', 'section']
const per2 = ['shah', '10', 'd']
const per3 = [...per1, ...per2]
const per4 = per1 + per2
console.log("Result with Spread Operator", per2)
console.log("Result without Spread operator", per3)

const products = {
    product_One: ['biket', 'coke', 'cake', 'pics'],
    product_Two: ['school', 'college', 'batches'],
}
const Add_prducts_elem = [...product_One + per2]
console.log(Add_prducts_elem);