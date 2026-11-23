function introduce(city, country){
    console.log(`my name is${this.name}, and i live in ${city}, ${country}`);

}
const user ={
    name: "Aashutosh"
};
// call immediately executes the function and acepts individually
introduce.call(user, "pune","india");

//apply also immediately executes the function but passes argument as an array like value
introduce.apply(user, ["pune","india"]);

//bind() does not immediately execute the function
// it retun a new function whse this is bound to the supplied object

const boundFunction = introduce.bind(user);
boundFunction("Pune","India");
