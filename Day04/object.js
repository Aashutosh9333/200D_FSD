

//crating object 
const Student = {
    name:"Ashutosh",
    age: 23,
    stram:"cse",
    skills:["js","css","html"], //value can be array
    address:{
        dist:"dharashiv",  //value can be another objects
        state:"mh"
    }
};

//acess dot notation use this mostly
console.log(Student.name);
console.log(Student.address.state);//nested access

//access bracket notation needed when key is dynamic or has space
console.log(Student["age"]);//23

let field = "stram";
console.log(Student[field]);

// Add, update , delete 
const car = { brand:"mahindra", modal:"Novo 605", price: 1100000};
car.color ="choclet"; //add new key
car.price = 1200000;  //update existing key
delete car.model;   // Delete a key
console.log(car);


//dynamic key with [] the key come from a variable used in real form

let keyName ="email";
let newUser = { name: "ram", [keyName]:"ram@gmail.com" };
console.log(newUser);

//SHORTHAND if variable name == key name write ince very common
let name = "Rahul ", age =26;
let shortUser = {name,age};
console.log(shortUser);

//check if a key exits
console.log("name" in shortUser);
console.log(shortUser.hasOwnProperty("age"));

// Real Life Example Product Bank Account Objects

//flipcart product page is one object like this
const laptop ={
    id:101, name: "Asus tuf 15", brand:"Asus",
    price:115000, mrp:150000, rating: 4.9, inStock:true,
    specs:{ram:"16GB", storage: "512GB", processor: "intel i7" }
};
let discount = Math.round(((laptop.mrp -laptop.price)/laptop.mrp)*100);
console.log(`${laptop.name} - ${discount}% OFF`);
console.log("RAM:", laptop.specs.ram);

//bank account object - data only for now methods come in sections 2
const account = {accNo:102030, holder:"Aashutosh", balance:200000000,type:"saving" };
account.balance += 300000; //salary credited
console.log("balance after salary: Rs." , account.balance);
//object method  nad this 

 const employee = {
     name: "Aashutosh",
  role: "Developer",
  salary: 60000,
  introduce :function(){ //normal function
    console.log(`hi ai am ${this.name}, a ${this.role}`);
  },
   //shorthand method syntax modernuse this 
   giveBonus(percent){
    let bonus = (this.salary*percent)/100;
    console.log(`${this.name} bonus: RS.${bonus}`);
    return bonus;
   }
 };
 employee.introduce();
 employee.giveBonus(10);

 //shoppimg cart object with methods
 const shoppingcart = {
    owner:"Aashutosh",
    items:[
        {name:"Mouse", price: 800, qty:1},
        {name:"keyboard", price:2500, qty:1}
    ],
    totalItems(){
        return this.items.reduce((acc, i) => acc + i.qty, 0);

    },
    totalPrice(){
        return this.items.reduce((acc, i) => acc + i.price *i.qty, 0);

    },
    addItem(item){
        this.items.push(item);
        console.log(item.name + "added. New total: Rs. "+this.totalPrice());
    },
    summary(){
        console.log(`${this.owner}'s cart:${this.totalItems()} items, Rs.${this.totalPrice()}`);

    }

 };
 shoppingcart.summary();
 shoppingcart.addItem({name:"Cover", price: 500, qty:2});
 //shoppingcart.summary();

 //Object.keys /values / entries & more
 const examResult = {Math: 88, english:76, Science:92};

 console.log(Object.keys(examResult));
 console.log(Object.values(examResult));
 console.log(Object.entries(examResult));

 //Real use totla marks and average without knowing keys in advance
 let totalMarks = Object.values(examResult).reduce((a,c,0))