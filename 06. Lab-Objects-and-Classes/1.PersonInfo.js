function personInfo(parm1, parm2, parm3) {
    let person = {};
    person.firstName = parm1;
    person.lastName = parm2;
    person.age = parm3;
    
    return person;
}

console.log(personInfo("Peter",
    "Pan",
    "20"
));