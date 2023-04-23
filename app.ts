
enum Role {ADMIN, READ_ONLY, AUTHOR};
const person = {
    name : 'wormsBrother',
    age : 30,
    role : Role.ADMIN
};

if(person.role === Role.ADMIN){
    console.log('role is',Role.ADMIN);
}