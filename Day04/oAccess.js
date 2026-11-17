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

student2["marks"] = 85;

console.log(student2.marks);

//upadate properties

student2.age = 23;
student2.city = "Mumbai";

console.log(student2);

// object methods
const person= {
    name:"rahul",
    age:25,

    introduce: function (){
        console.log("hello, my name is rahul");
    },

    introduce1(){
        console.log("hello my name is A");
    },
    introduce2(){
        console.log(`my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
    }
};
person.introduce1();
person.introduce2();
// method using object properties

//three level nested object 
const company = {
    name: "Tech Solutions",

    employee: {
        name: "Amit",

        address: {
            city: "Mumbai",
            state: "Maharashtra"
        }
    }
};

console.log(company.employee.address.city);//each dot enter next object


//Array of an object and object of an array
const product = {
    name: "Laptop",
    price: 65000,
    brand: "ASUS",

    specifications: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    },

    reviews: [
        {
            user: "Rahul",
            rating: 5
        },
        {
            user: "Amit",
            rating: 4
        }
    ]
};

console.log(product.specifications.processor);
console.log(product.reviews[0].rating);

//loop through an object 
//for...in  loop
const student4 = {
    name:"rahul",
    age:23,
    city:"pune"
};
for(let key in student4){
   // console.log(key);
    console.log(key,student4[key]);

}
//object.key()
const keys =Object.keys(student);
console.log(keys);

//object.values
const values = Object.values(student4);
console.log(values);

//object entries
console.log(Object.entries(student));
 
//object destructuring
 const student5 = {
    name: "Rahul",
    age: 22,
    city: "Pune"
};
const { name, age, city } = student5;
console.log(name, age, city);

//rename properties
const { name:studentName, age: studentAge } =student5;
console.log(studentName, studentAge);
