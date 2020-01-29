module.exports=function entertainment(cb){
    console.log('i remember the movie friend asked me to watch');
    setTimeout(function(){
        console.log('I start reading after I watch this movie');
        cb();
    },2000)
}