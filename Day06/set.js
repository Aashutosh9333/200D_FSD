/* set interval is built in javascript function that execute a 
particular function reapeadtedly after a fixed time interval


let otpTimer;

function startResendTimer() {

    clearInterval(otpTimer);

    let remaining = 30;

    console.log(`Resend OTP available in ${remaining}s`);

    otpTimer = setInterval(() => {

        remaining--;

        if (remaining > 0) {
            console.log(`Resend OTP available in ${remaining}s`);
        } else {
            clearInterval(otpTimer);
            otpTimer = null;

            console.log("Now you can click: Resend OTP");
        }

    }, 1000);
}
startResendTimer();