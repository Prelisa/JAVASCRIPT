// Function is a reusable block of code that performs specific task

// var a={} //assignment operator ma middle braces aaucha vane that is object
//this is object

// if(condition){

// }// this is a block of if 
// else{

// }
// switch(){

// }
// assignment operator is not there so it is called block


// syntax of function
// function(){

// }// basic syntax

// var a;
// a='broadway';
// a=true;
// a=333

// a=function(){
//     console.log('i am a function');
// }
// a();
//function lai call bahek kei pani garna mildaina



// two ways of writing a function 
// 1.expression syantax
// 2. declarative syntax

// 1.Expression syntax
// var welcome=function(){ //variable declaration
//     console.log('welcome to js');
// }

//in any variable or constant if we assign value as an function then it iscalled expression syntax


// DEclaration syntax
// function sayHello(){ //function declaration
//     console.log('hyy')
// }
// sayHello();
// welcome();

//Expression syntax function can only be called after it is made.
//Declaration syntax function can be called beofre it is made


//Hoisting 
//Hoisting is a mechanism that moves all the declaration at top before execution
// like, function sayHello(){}, var welcome;

// var welcome; 
// welcome=function(){

// }
//yesto huda, var welcome chai agadi declare huncha hoisting vako karan le garda
// var welcome; 
// welcome();
// // yo cha vane var welcome vanne variable declare vako cha, memory allocation cha but value not defied cha


//TYPE OF FUNCTION
// 1.NAME FUNCTION
// 2.UNNAMED Function, ANANYMOUS FUNCTION
// function(){

// }

// 3.function with argument
// 4.function with return type
// 5.IIFE (immediately invoked functional expression)

// 1.named function
// function with name
// example: welcome and sayHello

// 2.anaymous function 
// function(){

// }

// 3.IIFE
// ()() //duita paranthesis vayo vane tyo iife ho
// agadi ko bracket ma function rakhne
// (welcome)();

// (function(){
//     console.log('i am function');
//     console.log('i am iife');
// })();

//this is anamous function this can be run only once
//iife can only be run once

// 4. Function with argument
// function welcome(name,place){
//     console.log('what comes in >>',name, place)
//     var welcomeText='welcome to ';
//     console.log('hy '+name+'  '+welcomeText + place);
// }
// welcome('prelisa','braodway');
// welcome('sita','pokhara');
// welcome('gita','ku');


// falsy value
// null, undefined, '', false, NaN

//function with multiple argument
// function sendMail(to,sub,from,cc,bcc,replyTo){
//     //content generation
// }
// sendMail('ram',null,null, null,a@gmail.com)

// // if two or three arguments are there take only one arguments
// function sendMailNew(details){
    //content generate
    // details.from, details.to, details.message
// }  
// sendMailNew(){
//     from:'',
//     to:'',
//     message:''
// }

// funtion with return type
// if function le kei dincha vane expected result cha vane we use yesto function
function add(num1,num2){
    var res=num1+num2;
    return res;
  
}
var result=add(3,4);//funcion le j dincha tyai herchum yeta
console.log('result>>',result)

//return ma j rakhyo tyai paucha, string rakhda string, j rakhyo tyai


function goToKitchen(){
    var fruits=['apple','mango'];
    var veggie=['potato'];
    return fruits;//yo vanda tala execute hudaina
}
var result=goToKitchen();
console.log('result>>', result);


//we can make object
function goToKitchen(){
    var fruits=['apple','mango'];
    var veggie=['potato'];
    return {
        fruits,//we can also write as frutis kinavane fruit vanne agadi nai memory banisakyo
       //frutis paila nai aalocate vako memory ho, yesma tyai nam use garchum vane key vaneko allocate memory ko nam and value vaneko tesko value huncha yeslai object shorthand vancha

        veggie:veggie
    };
}
var result=goToKitchen();
console.log('result>>', result);


//object short hand
function getNames(){
    return{
        name:['a'],
        address: 'tinkune',
        email:'dprelisa@gmail.com',
        phone:'333'
    }
}
//object destruct
// we can get only one value
var {name}=getNames();
console.log('result>>>',name)

var result= getNames();
console.log('result>>',result);