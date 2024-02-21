var changeType = () => {
    var pwdElement = document.querySelector("#passText");
    var currentType = pwdElement.getAttribute("type");
    if (currentType == "password") {
        pwdElement.setAttribute("type", "text");
        document.querySelector("#closedEye").style.display = "none";
        document.querySelector("#openEye").style.display = "inline-block";
    } else {
        pwdElement.setAttribute("type", "password");
        document.querySelector("#closedEye").style.display = "inline-block";
        document.querySelector("#openEye").style.display = "none";
    }
};

var keyUpEvent = (event) => {
    var element = event.target;
    // for first validation
    document.querySelector(".firstCondition").style.display = "block";
    if (element.value.length == 8) {
        document.querySelector(".firstCondition").style.color = "Yellowgreen";
    } else {
        document.querySelector(".firstCondition").style.display = "block";
    }

    // for second validation
    var digit = element.value.replace(/[^0-9]/g, "").length;
    document.querySelector(".secondCondition").style.display = "block";
    if (digit >= 1 && digit <= 2) {
        document.querySelector(".secondCondition").style.color = "Yellowgreen";
    } else {
        document.querySelector(".secondCondition").style.color = "white";
    }
    // for third condition
    document.querySelector(".thirdCondition").style.display = "block";
    var specialSymbol = new RegExp("(?=.*[!@#$%^&*])");
    if (specialSymbol.test(element.value)) {
        document.querySelector(".thirdCondition").style.color = "Yellowgreen";
    } else {
        document.querySelector(".thirdCondition").style.color = "white";
    }
    // for hiding password rules
    if (element.value.length == "") {
        document.querySelector(".firstCondition").style.display = "none";
        document.querySelector(".secondCondition").style.display = "none";
        document.querySelector(".thirdCondition").style.display = "none";
    }
}
var logInForm = () => {
    location.href = "file:///E:/UIFullStackTraining/VirtualServer/public/GitHub/portfolio/ShoppersStop/index.html";
}

var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");


var getCaptcha = () => {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha = "";
    var charLength = characters.length;
    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * charLength));
    }
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); // Clear the previous CAPTCHA
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FF4F00";
    ctx.fillText(captcha, 60, 30); // Draw the CAPTCHA text on the canvas
    ctx.moveTo(0, 0);
    ctx.lineTo(230, 42);
    ctx.moveTo(230, 0);
    ctx.lineTo(0, 42);
    ctx.moveTo(20, 0);
    ctx.lineTo(0, 42);
    ctx.moveTo(210, 0);
    ctx.lineTo(180, 42);

    ctx.stroke();
}

getCaptcha(); // Call the function to initially generate and draw the CAPTCHA

document.getElementById("BtnClick").addEventListener("click", () => {
    getCaptcha(); // Call the function to generate and draw a new CAPTCHA on button click
});
