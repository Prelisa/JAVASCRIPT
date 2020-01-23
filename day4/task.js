function welcome(name){
    function setPlace(place){
        var message= `hy ${name}, welcome to ${place}`
        return message;
    }
    //  var innerRes=setPlace('tinkune');
    // //  console.log('innerresutl>>',innerRes)
    //  return innerRes;
    return setPlace;
}
var result=welcome('prelisa')('jhapa');
var result1=welcome('prajwal')('patan');
console.log('result>>',result);
console.log('result1>>',result1)



//task 

// write a function to add 3 numbers

// you must call a function as below

// var result= addition (2)(3)(4);

// console.log('result>>',result);

function addition(num){
    function first(num1){
        function second(num2){
            var add= num+num1+num2;
            return add;
        }
        return second;
    }
    return first;
}
var result= addition(2)(3)(5);
console.log('result1>>',result);