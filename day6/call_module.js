const askNote= require('./askForNote');
const print=require('./printnote');
const entertainment=require('./entertainment');

askNote('database',function(err,success){
    console.log('result for askForNote');
    if(err){
        console.log('error in finding note',err);
    }
    else{
        console.log('success in finding note',success);
        print('printed note',function(err,success){
            console.log('result of print note');
            if(err){
                console.log('error in printing note',err);
            }
            else{
                console.log('success in printing note',success);
                console.log('I set my mind to study');
                entertainment(function(){
                    console.log('I start studying');
                })
                console.log('mom calls me');
                console.log('It is raining outside');

            }
        })
        console.log('i meet a friend');
        console.log('i go for a coffee');
    }
})
console.log('I eat food');
console.log('I take shower');

