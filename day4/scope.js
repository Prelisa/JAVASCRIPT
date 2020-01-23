// scope is the accessibility of application data (variables, constants, functi)ons
//3 types of scope
//Global scope
//local scope
//block scope

// var address="tinkune Nepal";
// var name='broadway';

// "use strict";//global //runs strict, var let const use nagari memory allocate garna didaina
// function welcome(){
//     var email='prelisa@gmail.com';
//     name = 'javascript';//re allocation of the already used memory , it is modified
//     prelisa='iam prelisa';//yo global scope huncha, function call vayo vane
//     console.log('address>>', address);
//     console.log('name inside>>', name);

// }
// welcome();
// // console.log('email>>',email); 
// console.log('name outside>>',name);
// console.log('prelisa>>',prelisa);



//Block Scope
// we should use let for block scope

//let use garnu vaneko block wise different memory allocate garnu ho


// let a ="hy";
// function welcome(name){
//     let msg='hello and welcome';
//     if(name){
//         let msg=`hy ${name} welcome`;
//         let newVariable='sth new';
//         console.log('msg in if block>>',msg );
//     }
//     else{
//         let msg='you are welcome'
//     }
//     console.log('msg',msg)
// }
// welcome('saurabh');
// console.log('msg outside>>',msg)

//var functional scope, let block scope



//closure
// a closure is inner function that has access to 
// 1. GLobal scope
// 2.parent function scope
// 3. parent function argument
// 4.own argument
// 5.own scope


var text='welcome';

function sayHello(name){
    var to='to';

    function lab(labNo){
        var msg=`hy ${name} ${text} ${to} ${labNo}. `
        console.log('msg>>',msg);
    }
    lab('lab12')
}
sayHello('prelisa');
sayHello('prajwal');


