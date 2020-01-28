module.exports=function askForNote(subject) {
    return new Promise(function (resolve, reject) {
        console.log('I called a friend and asked for the note');
        console.log('friend insisted to call me back after he finds the note');
        setTimeout(function () {
            console.log('friend finds a note');
            console.log('friend calls me back');
            resolve('NOTE in PDF');
        }, 2000)
    })

}