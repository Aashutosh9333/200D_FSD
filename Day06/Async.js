// Sync vs Async 

//Syncronous code= run code line by line when first 
// line completed then secound line run

console.log("first run");
console.log("secound run");
console.log("third run");

//Anyncronous
console.log("1.run first");
setTimeout(() => {
    console.log("2 .run third ");
    
}, 2000);
console.log("3 run secound");

// otp resend timer and auto logout warning
function startResendTimer(){
    let remaining = 30 ;
    console.log(`Resend otp available in ${remaining}s`);
    let timer = setInterval (() => {
        remaining --;
        if (remaining > 0) {
            console.log(`Resend Otp Available in ${remaining}s`);

            
        } else {
            clearInterval(timer);
            console.log("Now you can click: Resend OTP");
            
        }

    } ,1000);


}

//
let sessionTimer = setTimeout(() => {
  console.log("Warning: You will be logged out in 1 minute due to inactivity");
}, 5 * 60 * 1000);  // 5 minutes - just observe the pattern, don't wait for it
clearTimeout(sessionTimer);  // cancel for this demo