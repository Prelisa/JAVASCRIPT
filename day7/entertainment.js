module.exports=function entertainment() {
    return new Promise(function (resolve, reject) {
        console.log('i remember the movie friend asked me to watch');
        setTimeout(function () {
            console.log('I start reading after I watch this movie');
            resolve();
        }, 2000)
    })

}
