// // console.log('Your code goes here...');

// function add(n1:number , n2:number, showResult: boolean, phrase : string){
//     const result = n1 + n2;
//     if(showResult){
//         console.log(phrase + result);
//     }else{
//         return result;
//     }
    
// }

// const number1  = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is ';

// add(number1, number2, printResult, resultPhrase);


enum Role {ADMIN, READ_ONLY, AUTHOR};
const person = {
    name : 'wormsBrother',
    age : 30,
    role : Role.ADMIN
};

if(person.role === Role.ADMIN){
    console.log('role is',Role.ADMIN);
}

console.log(person.age);