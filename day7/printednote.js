module.exports=function printedNote(pdf) {
    return new Promise(function (resolve, reject) {
        console.log('I went to stationairy and shopkeeper asked me come back later');
        setTimeout(function () {
            console.log('shopkeeper called me with the printed note');
            resolve('printednote');
        }, 2000)
    })
}