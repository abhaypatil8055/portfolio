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

var keyUpEvent = () => {
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
    location.href = "file:///E:/UIFullStackTraining/VirtualServer/public/JS-Mini-Project/AmazonClone/index.html";
}