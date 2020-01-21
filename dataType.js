// classification of data is dataType
// data is never changed, only the classification is changed


//divided into two groups 
//primitive and derived(non-primitive)
// 1. Primitive
// String ===> ' ', " "
// Number => 1111111.1
// Boolean ==> true , false
// undefined ==> memory allocated but no value
// null ==> no memory allocation , no value as well

//Array 
var hobbies =['coding','Debugging','dancing','singing']

var address ={
    temp_address: "Patan",
    permanent_address: "Jhapa"
}

console.log(address.permanent_address);

var prelisa={
    name:'prelisa',
    address: 'Patan',
    phone:9860103098,
    class:'CS Graduate'
}
prelisa.email='dprelisa@gmail.com';
prelisa.class='MERN STACK';

//dot notation
console.log('Prelisa>>>'+prelisa.email + prelisa.class);

//bracket notation
var phone='name';
console.log('Prelisa>>>'+ prelisa[phone]);//this line
console.log('prelisa>>>'+prelisa['phone']);//and this line means same
