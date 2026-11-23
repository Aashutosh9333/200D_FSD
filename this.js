// farmwork trator owner code block
class TractorOwner{
    constructor(name, tracatorName, hourlyRate){
        this.name =name;
        this.tracatorName =tracatorName;
        this.hourlyRate = hourlyRate;

        this.bookings =[];

    }

    showDetails(){
        console.log(`Owner: ${this.name}`);
        console.log(`Tractor: ${this.tracatorName}`);
        console.log(`Hourly Rate: ${this.hourlyRate}`);
    }
    calculateAmount(hours){
        return this.hourlyRate * hours;
    }
    addBooking(customerName, hours){
        const amount = this.calculateAmount(hours);
        const bookings = {
            customerName: customerName,
            hours: hours,
            amount: amount
        };
        this.bookings.push(bookings);

        console.log(`${customerName} booking added`);
        console.log(`Booking Amount: ${amount}`);
    }
    getTotalEarnings(){
        let total =0;
        for (const booking of this.bookings){
            total += booking.amount;
        }
        return total;
    }
}

const owner1 = new TractorOwner(
    "Rajesh",
    "Mahindra 575 DI",
    700
);

owner1.showDetails();
owner1.addBooking("Aashutosh", 5);
owner1.addBooking("Abhay", 3);

console.log("Total Earnings:", owner1.getTotalEarnings());