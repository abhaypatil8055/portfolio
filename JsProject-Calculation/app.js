var add = () => {
    var num1 = document.querySelector("#num1").value;
    num1 = parseInt(num1);
    var num2 = document.querySelector("#num2").value;
    num2 = parseInt(num2);
    var result = num1 + num2;
    var result = document.querySelector("span").innerHTML = ` Addition : ${result}`;
    var reset = document.querySelector("#reset").style.display = "block";
    document.querySelector(".error1").style.display = "block";
    document.querySelector(".error2").style.display = "block";
}
var sub = () => {
    var num1 = document.querySelector("#num1").value;
    num1 = parseInt(num1);
    var num2 = document.querySelector("#num2").value;
    num2 = parseInt(num2);
    var result = num1 - num2;
    if (num2 > num1) {
        var result = document.querySelector("span").innerHTML = ` Substraction : ${result}`;
        result = document.querySelector("span").style.color = "white";
    } else {
        var result = document.querySelector("span").innerHTML = ` Substraction : ${result}`;
    }
    var reset = document.querySelector("#reset").style.display = "block";
}
var multi = () => {
    var num1 = document.querySelector("#num1").value;
    num1 = parseInt(num1);
    var num2 = document.querySelector("#num2").value;
    num2 = parseInt(num2);
    var result = num1 * num2;
    var result = document.querySelector("span").innerHTML = `Multiplication : ${result}`;
    var reset = document.querySelector("#reset").style.display = "block";
}
var divi = () => {
    var num1 = document.querySelector("#num1").value;
    num1 = parseInt(num1);
    var num2 = document.querySelector("#num2").value;
    num2 = parseInt(num2);
    var result = num1 / num2;
    var result = document.querySelector("span").innerHTML = `Division : ${result}`;
    var reset = document.querySelector("#reset").style.display = "block";
}
var resetValues = () => {
    var num1 = document.querySelector("#num1").value = "";
    var num2 = document.querySelector("#num2").value = "";
    var result = document.querySelector("span").innerHTML = "";
    var reset = document.querySelector("#reset").style.display = "none";
    document.querySelector(".error1").style.display = "none";
    document.querySelector(".error2").style.display = "none";
}