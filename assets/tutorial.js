 /*
 var firstName = 'Vivian';
 console.log(firstName);

 var LastName = 'Richard';
 var age = 28;
 var fullAge = true;
 console.log(firstName);
 */

 /***variable  mutation and type coercion */
 /***Coding challenge on Math operator *
 var markMass = 78;

 var  markHeight = 1.69;

 var johnMass = 92;
 var johnHeight = 1.95;

 var BMIMark = markMass / (markHeight*markHeight);
 console.log(BMIMark)

 var BMIJohn = johnMass/ (johnHeight*johnHeight);
 console.log(BMIJohn);

 var markHigherBMI = BMIMark > BMIJohn;
 console.log(markHigherBMI);
 
console.log('Is Mark\'s BMI higher than John\'s?'+ markHigherBMI);***/

/***If/else statements 
var firstName = 'John'
var civilStatus = 'single'

if (civilStatus === 'married') {
    console.log(firstName + 'is married');
} else {
    console.log(firstName +'will hopefully marry soon');
    
}*/

/**Boolean logic
var firstName = 'John'
var age = 16
if (age < 13) {
    console.log (irstName + 'is a boy.');
    
} else if (age >= 13 && age < 20) {
    console.log(firstName + 'is a teenager');
    
} else {
    console.log(firstName + 'is a man.');
}*/

/**The ternary operator and switch statements**/

/**var firstName = 'John';
var age = 22;
age >= 18 ? console.log( firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18? 'beer' : 'juice'; 
console.log(drink);
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}**/

/**switch statements*/
var firstName = 'John'
var job = 'chef'; 
switch (job) {
    case 'teacher':
        console.log (firstName + ' teaches kids how to code');
        break;
        case 'driver':
            console.log (firstName + ' drives an uber in woji');
            break;
            case 'designer':
                console.log (firstName + 'designs amazing websites');
                break;
    default:
        console.log (firstName + ' does something else');
        break;
}
/**truthy and falsy values and equality operators**/
//falsy values: undefined, null, 0, '', Nan
// truthy values: all the values that are not falsy values

var height:
if (height){
    console.log('variable is defined');
} else{
    console.log('variable has not been defined')
}