module.exports = function askForNote(subject,cb){
    console.log('I called a friend and asked for the note');
    console.log('friend insisted to call me back after he finds the note');
    setTimeout(function(){
        console.log('friend finds a note');
        console.log('friend calls me back');
        cb(null,'NOTE in PDF');
    },2000)
}