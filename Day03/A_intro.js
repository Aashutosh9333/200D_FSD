const students =[
    "Aashutosh", "Rahul", "rushi", "ganesh"
];

console.log(students);
console.log(students[2]);
console.log(students.length-1);
console.log(students.length);

// Farmwork project example
const tractor =[
    "Mahindra novo 605 pp",
    "Swaraj 855 xt",
    "John deere 5210",
    "solnalika 3035"
];
console.log("Total tarcator: ", tractor.length);

console.log("Last Tractor:", tractor[0]);

console.log("Last Tractor:", tractor[tractor.length -1]);

tractor[1] = "Swaraj 855 Fe";

console.log(tractor);

// 
const Lname =[
    "javascript",
    "react",
    "typescript",
    "postresql",
    "express"
];
console.log(Lname.at(0));
console.log(Lname.at(2));

console.log("total language : " ,Lname.length);
console.log("Last language:", Lname[Lname.length -1]);

console.log(Lname.splice(1,1,"css"));
console.log(
    Lname.push("node")
);
console.log(Lname);