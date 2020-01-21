// Mutable and immutable property always comes in the datatype

var a='broadway infosys nepal'
var b=a;
console.log('a>>', a)
console.log('b>>',b)
//  a and b are Same

var a='broadway infosys nepal'
var b=a;
b= tinkune
console.log('a>>', a) //broadway infosys nepal
console.log('b>>',b) //tinkune

var a='broadway infosys nepal'
var b=a;
a=kathmandu
console.log('a>>', a)//kathmandu
console.log('b>>',b)//broadway infosys nepal


//learnings primitive
//original and reference , we have two things

//if we change in original, it doesn't reflect on reference
//we change on reference, it doesn't reflect on original


// example objects
var obj={
    name:'broadway infosys nepal',
    address:'tinukne'
}

var obj2=obj
console.log('obj1>>>',obj);
console.log('obj2>>',obj2);
//output are same 
// 2
var obj={
    name:'broadway infosys nepal',
    address:'tinukne'
}

var obj2=obj
obj.name="hello and welcome"


console.log('obj1>>>',obj); //hello and welcome
console.log('obj2>>',obj2);//hello and welcome

// 3
var obj={
    name:'broadway infosys nepal',
    address:'tinukne'
}

var obj2=obj
obj2.email='dprelisa@gmail.com'

console.log('obj1>>>',obj);//email is shown to both
console.log('obj2>>',obj2);//email is same



//learnings on object

//original and reference , we have two things 

//if we change in original, it reflects on reference
//we change on reference, it reflects on original


// Primitive datatype are immutable datatype
//Non primitive datatype, array and object they have mutable property
