// Access object properties using 2 methos 
//1. dot notation .
const student = {
    name: "Rahul",
    age: 22,
    city: "Pune"
};

console.log(student.name);
console.log(student.age);
console.log(student.city);


//2. Bracket Notation []
const student1 = {
    name: "Rahul",
    age: 22,
    city: "Pune"
};

console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1["city"]);

// Add property
const student2 = {
    name: "Rahul",
    age: 22
};

// Adding new properties
student2.city = "Pune";
student2.course = "JavaScript";

console.log(student2);