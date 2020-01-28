// can make readable code in promise and get rid of callback hell
const askForNote= require('./askfornote');
const printedNote=require('./printednote');
const entertainment=require('./entertainment');

askForNote()
    .then(function (data) {
        console.log('success in finding note',data);
        var a=printedNote();
        //non blocking code insertion
        console.log('i meet frined');
        console.log('i eat food with her');
        return a;
    })
    .then(function(data){
        console.log('sucess in printing',data)
        return entertainment();
    })
    .then(function(data){
        console.log('Now I will read');
    })
    .catch(function (err) {
        console.log('i don\'t have a note, failure in promise');
    })
    console.log('eat food');