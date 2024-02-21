class BankAccount {
    constructor(name, number, balance, ifsccode) {
        this.accname = name;
        this.accnumber = number;
        this.accbalance = balance;
        this.accifsccode = ifsccode;
    }
    displayDetails() {
        var accountname = document.querySelector("#accname");
        accountname.innerHTML = "";
        var nameDetails = document.createElement("p");
        nameDetails.textContent = `Account Holder Name : ${this.accname}`
        accountname.appendChild(nameDetails);

        var accountNumber = document.querySelector("#accnumber");
        accountNumber.innerHTML = "";
        var numberDetails = document.createElement("p");
        numberDetails.textContent = `Account Number : ${this.accnumber}`;
        accountNumber.appendChild(numberDetails);

        var accountBalance = document.querySelector("#accbalance");
        accountBalance.innerHTML = "";
        var balanceDetails = document.createElement("p");
        balanceDetails.textContent = `Account Balance : ${this.accbalance} rs`
        accountBalance.appendChild(balanceDetails);

        var accountIFSCCode = document.querySelector("#accifsccode");
        accountIFSCCode.innerHTML = "";
        var ifscCodeDetails = document.createElement("p");
        ifscCodeDetails.textContent = `IFSC Code : ${this.accifsccode}`
        accountIFSCCode.appendChild(ifscCodeDetails);
    }
    deposit(amount) {
        this.accbalance += amount;
        this.displayDetails();
    }
}
var clientFirst = new BankAccount("Abhay Patil", 15254000, 0, "BJBP-1215");
clientFirst.displayDetails();

var depositFunction = () => {
    var depositRupees = parseInt(document.querySelector("#depositMoney").value);
    clientFirst.deposit(depositRupees);
    document.querySelector("#depositButton").style.display = "none";
    document.querySelector("#depositMoney").style.display = "none";
    document.querySelector("#addMoreMoney").style.display = "Block";
    document.querySelector("#accbalance").style.color = "Red";
    document.querySelector("span").innerHTML = `You have successfully deposited ${depositRupees} rs in your acoount.`;
    msg();
}

var addMoreMoney = () => {
    document.querySelector("#depositButton").style.display = "inline-block";
    document.querySelector("#depositMoney").style.display = "inline-block";
    document.querySelector("#addMoreMoney").style.display = "none";
    document.querySelector("#depositMoney").value = "";

}

var ValidityState2 = () => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}

var msg = () => {
    setInterval(() => {
        document.querySelector("span").style.display = "none";
    },4000);
}