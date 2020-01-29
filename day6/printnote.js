module.exports= function printNote(pdf,cb){
    console.log('I went to stationairy and shopkeeper asked me come back later');
    setTimeout(function(){
        console.log('shopkeeper printed the note');
        cb(null,'printedNote');
    },2000);
}