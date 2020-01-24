// function welcome(name){
//     function setPlace(place){
//         var message= `hy ${name}, welcome to ${place}`
//         return message;
//     }
//     //  var innerRes=setPlace('tinkune');
//     // //  console.log('innerresutl>>',innerRes)
//     //  return innerRes;
//     return setPlace;
// }
// var result=welcome('prelisa')('jhapa');
// var result1=welcome('prajwal')('patan');
// console.log('result>>',result);
// console.log('result1>>',result1)



//task 

// write a function to add 3 numbers

// you must call a function as below

// var result= addition (2)(3)(4);

// console.log('result>>',result);



//First Approach

function addition(num) {
    function first(num1) {
        function second(num2) {
            var add = num + num1 + num2;
            return add;
        }
        return second;
    }
    return first;
}
var result1 = addition(2)(3)(5);
console.log('result1>>', result1);



//Different Approach

var result = 0;
function addition(num1) {
    result = num1;
    function first(num2) {
        result += num2;
        function second(num3) {
            result += num3;

        }
        return second;
    }
    return first;
}
addition(2)(3)(5);
console.log('result>>', result);
