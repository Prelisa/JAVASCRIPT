function askMoney() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(3000);
        }, 2000)
    });
}
askMoney(3000)
    .then(function(data){
        console.log('success in ask money',data)
    })//dont use semicolon else catch block wont work
    .catch(function(err){
        console.log('error in ask money',err)
    })
    .finally(function(){ //function ma kunai pani value hudaina, vaye ni aaudaina
        console.log('settled')
    })