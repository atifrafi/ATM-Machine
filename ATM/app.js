// userdata ka naam se ek object banaya ha jis ma user ka data hai?
const userData = {
    pin: "1234",
    balance: 1000
};

// is function ma hum pin ko verify karata hai ?
function checkPIN(pin) {
    return pin === userData.pin;
}

// is function mein user ka balance check karta hai or is ko alert box mein show karata hai
function checkBalance() {
    alert("Your balance is: $" + userData.balance.toFixed(2));
}

//if function mein hum user ko balance ko widraw karata hai agar user ka balance widraw amount sa ziyada hai to widraw succes hojata hai or agar kam hai tu alert ma massage ajata hai
function withdrawBalance(amount) {
    if (amount > 0 && amount <= userData.balance) {
        userData.balance -= amount;
        alert("Withdrawn: $" + amount.toFixed(2) + "\nRemaining balance: $" + userData.balance.toFixed(2));
    } else {
        alert("Invalid amount or insufficient funds.");
    }
}

// is fuction mein hum balance ko deposit karata hai
function depositBalance(amount) {
    if (amount > 0) {
        userData.balance += amount;
        alert("Deposited: $" + amount.toFixed(2) + "\nNew balance: $" + userData.balance.toFixed(2));
    } else {
        alert("Invalid amount.");
    }
}

// is function mein jab user start atm button par click karta hai tu prompt open hota hai atm ka baaki opiton ajata hai
function main() {
    const pin = prompt("Enter your PIN:");
    if (checkPIN(pin)) {
        let choice;
        do {
            choice = prompt("Select an option:\n1. Check Balance\n2. Withdraw Balance\n3. Deposit Balance\n4. Exit");
            switch (parseInt(choice)) {
                case 1:
                    checkBalance();
                    break;
                case 2:
                    const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                    withdrawBalance(withdrawAmount);
                    break;
                case 3:
                    const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                    depositBalance(depositAmount);
                    break;
                case 4:
                    alert("Thank you for using our ATM. Goodbye!");
                    break;
                default:
                    alert("Invalid option. Please try again.");
            }
        } while (parseInt(choice) !== 4);
    } else {
        alert("Invalid PIN. Access denied.");
    }
}