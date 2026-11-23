//shallow copy and deep copy 

//showllow copy create a new outer objrct but keep reference to nested objects 
// a deep copy creates an independent copy of nested structure as well 

//shallow copy

const original ={
    address: {
        city: "pune"
    }
};

const copy ={...original};

copy.address.city ="mumbai";
console.log(original.address.city);