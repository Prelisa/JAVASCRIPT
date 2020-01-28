//promise
// function buyCycle(model,cb){
//     cb(null,'data');
//     cb('broadway');

// }
// buyCycle('giant', function(err,done){
//     if (err){
//         console.log('err>>',err);
//     }
//     else{
//         console.log('success',done);
//     }
// })
//  suppose that I don't want to keep else statement then

// we can do this as well

// buyCycle('giant',function(err,done){
//     if(err){
//         return console.log('err>>',err)
//     }
//     console.log('success',done)
// })

// this is one technique where if there is error it goes into if block and returns the value and stops

//callback changes it state which is the drawback which is why we are using promise

//callback dosn't maintain its state 


//##################PROMISE################
// Promise is an object that holds result of future

//object
// var a={
//     a:'b',
//     c:'d',
//     abc: function (){ // abc is an method as it has fuction as a value

//     }
// }
// // can be called as
// a.abc(); //function call


//PROMISE MAINNTAINS STATE
 
// promise has 4 states
// 1.pending
// 2.fulfilled(success)
// 3.rejected(failure)
// 4.settled(either fulfilled or rejected)

//promise once settled will not change its state

//promise has 3 different methods
// 1. then // called as .then
// 2. catch// called as .catch
// 3. finally // called as .finally

  
//syntax

var a= new Promise(function(resolve,reject){
//task part
setTimeout(function(){
    console.log('settimeout here');
    resolve('done');
    //reject('done');
    //even this is called 100 times it will just show one time as the state is not changed
    // reject('done');
    // reject('done');
    // reject('done');//
},2000)
})
console.log('a>>',a)//output is the promise {pending}
a
.then(function(data){ // here then is the method as it is also a function and function has a function so it is a callback function
    console.log('success in promise block',data);
})
.catch(function(err){
    console.log('error in promise block',err);
})
.finally(function(){
    console.log('promise is setteled')
})
console.log('perform some non blocking task')

//nvm node version manager
