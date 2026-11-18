
// DOM Elements
const phoneInput = document.getElementById("phone");
const sendOtpBtn = document.getElementById("sendOtpBtn");

const phoneSection = document.getElementById("phoneSection");
const otpSection = document.getElementById("otpSection");

const otpBoxes = document.querySelectorAll(".otp-box");

const verifyBtn = document.getElementById("verifyBtn");
const resendBtn = document.getElementById("resendBtn");

const timerText = document.getElementById("timerText");
const statusMessage = document.getElementById("statusMessage");

const changeNumberBtn =
    document.getElementById("changeNumberBtn");


// Variables
let generatedOTP;
let otpTimer;
let remaining = 30;


// Generate 6 Digit OTP
function generateOTP() {
    return String(
        Math.floor(100000 + Math.random() * 900000)
    );
}


// Send OTP
function sendOTP() {

    const phone = phoneInput.value.trim();

    if (!/^[6-9]\d{9}$/.test(phone)) {
        showMessage("Enter a valid 10 digit mobile number", "red");
        return;
    }

    generatedOTP = generateOTP();

    console.log("Demo OTP:", generatedOTP);

    phoneSection.classList.add("hidden");
    otpSection.classList.remove("hidden");

    clearOTPBoxes();

    showMessage("OTP generated successfully!", "green");

    startResendTimer();

    otpBoxes[0].focus();
}


// Clear OTP inputs
function clearOTPBoxes() {
    otpBoxes.forEach(box => {
        box.value = "";
    });
}


// Start 30 Second Timer
function startResendTimer() {

    clearInterval(otpTimer);

    remaining = 30;

    resendBtn.disabled = true;

    updateTimerText();

    otpTimer = setInterval(() => {

        remaining--;

        updateTimerText();

        if (remaining <= 0) {

            clearInterval(otpTimer);

            resendBtn.disabled = false;

            timerText.textContent =
                "You can resend OTP now!";

        }

    }, 1000);
}


// Update Timer UI
function updateTimerText() {

    timerText.textContent =
        `Resend OTP available in ${remaining}s`;

}


// Verify OTP
function verifyOTP() {

    const enteredOTP = Array.from(otpBoxes)
        .map(box => box.value)
        .join("");

    if (enteredOTP.length !== 6) {
        showMessage("Please enter all 6 digits", "red");
        return;
    }

    if (enteredOTP === generatedOTP) {

        clearInterval(otpTimer);

        showMessage(
            "OTP Verified Successfully! Welcome 🎉",
            "green"
        );

        verifyBtn.disabled = true;
        resendBtn.disabled = true;

    } else {

        showMessage(
            "Invalid OTP! Please try again.",
            "red"
        );

        clearOTPBoxes();
        otpBoxes[0].focus();
    }
}


// Resend OTP
function resendOTP() {

    if (remaining > 0) return;

    generatedOTP = generateOTP();

    console.log("New Demo OTP:", generatedOTP);

    clearOTPBoxes();

    showMessage("New OTP generated!", "green");

    startResendTimer();

    otpBoxes[0].focus();
}


// OTP Input Navigation
otpBoxes.forEach((box, index) => {

    box.addEventListener("input", () => {

        box.value = box.value.replace(/\D/g, "");

        if (box.value && index < otpBoxes.length - 1) {
            otpBoxes[index + 1].focus();
        }

    });

    box.addEventListener("keydown", (event) => {

        if (
            event.key === "Backspace" &&
            !box.value &&
            index > 0
        ) {
            otpBoxes[index - 1].focus();
        }

    });

});


// Show Messages
function showMessage(message, color) {

    statusMessage.textContent = message;
    statusMessage.style.color = color;

}


// Change Mobile Number
function changeNumber() {

    clearInterval(otpTimer);

    phoneSection.classList.remove("hidden");
    otpSection.classList.add("hidden");

    clearOTPBoxes();

    verifyBtn.disabled = false;

    generatedOTP = null;

    showMessage("", "");

}


// Button Events
sendOtpBtn.addEventListener("click", sendOTP);

verifyBtn.addEventListener("click", verifyOTP);

resendBtn.addEventListener("click", resendOTP);

changeNumberBtn.addEventListener("click", changeNumber);
