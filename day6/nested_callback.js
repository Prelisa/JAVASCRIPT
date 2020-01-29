 //############TASK BLOCK###################
 function askForNote(subject,cb){
     //call friend and ask for note
     console.log('I called a friend and ask for note,he told me to callback after he finds the note');
     setTimeout(function(){
        console.log('Friend finds the note');
        console.log('friend calls me');
        cb(null,'Found note in PDF');
     },2000)
 }
 function printNote(pdf,cb){
     console.log('I go to stationary');
     console.log('shopkeeper asks me to come back after everything is printed');
     setTimeout(function(){
        console.log('note gets printed');
        cb(null,'Printed note');
     },2000)
 }
 function entertainment(cb){
     setTimeout(function(){
        cb();
     },2000)

 }
 function read(){
     console.log('start reading');
 }
 //############TASK BLOCK###################

 
 //##############EXECUTION BLOCK#################
askForNote('database',function(err,success){
    console.log('result of askForNote');
    if(err){
        console.log('Error finding the note',err)
    }else{
        console.log('Success finding the note',success)
        printNote('printedNote',function(err,success){
            console.log('result of printing');
            if(err){
                console.log('error in printing note',err);
            }
            else{
                console.log('success in printing note',success);
                console.log('i go back home');
                entertainment(function(){
                    console.log('i am watching a movie');
                    read();
                })
                console.log('mom calls me');
            }

        })
        console.log('I meet friends');
        console.log('I go to have coffee');
    }

})
console.log('I eat food');
console.log('I take shower');
  //##############EXECUTION BLOCK#################