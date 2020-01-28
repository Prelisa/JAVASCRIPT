//callback
// Function bhitra ko function

//synchronous and asynchronous
//Synchronous
//we are prioritizing to code execution, how our code is excuted, what kind of pattern it holds
//steps are executed in top to bottom sequence
//to move from step 1 to step 2 then step 2 waits for the result of step 1, this is synchronous
//waits for result; Synchronous ; slow execution 
//advantage; easy to implement logic; readable code  
//disadvantage; slow execution; 



// RXJS reactive extension JS ; this says that all the synchronous code should be transofrmed into asynchronous pattern
//this is also called reactive programming that makes code asynchronous

//Asynchronous
// Step wise step execution but it doesn't wait for the result.
// it has certain advantages and disadvantages
// fast execution
// difficulty in implementing logic, slightly unreadable code


//we divide this in blocking and non-blocking code
//blocking(dependent) means the result must come to take further actions like db connect should happen for it to insert sth to the database
//non-blocking(independent)means it doesn't have any connnection with the blocking code and can be executed independently as well
 

//event loop - multiple events come to the loop. inventory //maintains queue
// it has all the results it has now difficulty in result handling

//main challenge of asynchronous pattern is result handling

//callback

//Buy phone 

// function buyPhone(model){
//      //this phone is not available right now
//      console.log('shopkeepr told me to waiat till even for desired model');
//      setTimeout(function(){
//         console.log('phone arrives at shop');
//         return 's10';
//      },2000)
//     // return's10';

// }
// console.log('i want to buy phone')
// var phone= buyPhone();//task handle result of this task
// console.log('i have phone phone>>>',phone);
// console.log('now take selfie');


//callback is a mechanism to handle result of async call
//cb is a function which is passed as an argument of another function


function buyPhone(model,cb){
    //this phone is not available right now
    console.log('shopkeepr told me to waiat till even for desired model');
    setTimeout(function(){
       console.log('phone arrives at shop');
        cb();
    },2000)


}
console.log('i want to buy phone') 
buyPhone('s10',function(){
    //blocking block
console.log('result of buyphone')
console.log('i have phone phone>>>');
console.log('now take selfie');
});
//non blocking code
console.log('take bath');
console.log('go to college');