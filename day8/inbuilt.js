//typeof //this is a inbuilt method that figures out the datatype 

//string
// var str = 'welcome to Broadway Infosys Nepal';
// console.log('check length', str.length);//inbuilt property
// console.log('to uppercase', str.toUpperCase());//inbuilt method
// console.log('to lower case', str.toLowerCase());//dot notation object vtra function is method
// var trimmedString = str.trim()
// console.log('trim', trimmedString);

// console.log('taking part str', str.substr(1, 3)) //takes 1, 2 and 3 index letters
// console.log('taking part string', str.substring(1, 3)) //takes only 1 and 2 index

// type conversion (coersion)
// 1. implicit coercion
// 2. explicit coercion

// implicit coercion
// var a = '2';
// var b = 3;
// console.log('multiply',a*b);

//explicit coercion , datatype afai jani jani change garaune

var hobbies='singing,dancing,cycling';//string 
//converting it to array
//var hobbies1=hobbies.split(','); //string lai array ma change garne (split use garera)
//split(',') yo vneko comma le seperate gara vaneko ho, tyai vako comma le
// var hobbies1=hobbies.split('i');
var hobbies1=hobbies.split(',');
console.log('hobbies>>',hobbies1)//converted to string
console.log('hobbies>>',hobbies1[1])//converted to string


//number

var num=2333.77777;
console.log('to fixed dec point',num.toFixed(3));
console.log('to integer value',parseInt(num));
console.log('to float',parseFloat(num));

var num1= 123
console.log('decimal point',num1.toFixed(2));

function add(num1,num2){
return num1*num2;
}
var result=add('22hhhjj',3); // this will just be concatenated
console.log('result',result);
console.log('check nan>>',isNaN(result));

var numberConvert= Number('22233')
console.log('convert into number>>',typeof(numberConvert));//explicit cohersion


// var a= 2
// undefined
// var b='2'
// undefined
// a==b (implicit coercion)
// true
// a===b
// false

// Boolean
// var bool=true;
// ! 

//Object
var mailData={
    from:'Broadway',
    to:'ram',
    msg:'welcome',
    subject:'welcome'
}

// console.log('check property>>',mailData.hasOwnProperty('from') )

// function sendMail(details){
//     if('to' in details){ //details madhye bata from check garne
//         console.log('property exsistt');
//     }
//     else{
//         console.log('property doesn\'t exit')
//     }
// }
// sendMail(mailData);

console.log('keys only>>',Object.keys(mailData));
console.log('values only>>',Object.values(mailData));

//serialization and deserialization
//stringify and parse
//json stringify json parse

console.log('original>>',mailData);
var serialization= JSON.stringify(mailData);
console.log('serialized data',serialization); //treats as one string
var deserialization= JSON.parse(serialization);
console.log('deserialized data',deserialization);
