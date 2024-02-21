boldText = () => {
    document.querySelector("#textInput").style.fontWeight = "bold";
}
italicText = () => {
    document.querySelector("#textInput").style.fontStyle = "italic";
}
upperCaseText = () => {
    let textarea = document.querySelector("#textInput");
    textarea.value = textarea.value.toUpperCase();
}
lowerCaseText = () => {
    document.querySelector("#textInput").style.textTransform = "Lowercase";
}
alignRightText = () => {
    document.querySelector("#textInput").style.textAlign = "right";
}
alignLeftText = () => {
    document.querySelector("#textInput").style.textAlign = "left";
}
alignCenterText = () => {
    document.querySelector("#textInput").style.textAlign = "center";
}
clearText = () => {
    let clearText = document.querySelector("#textInput").value = "";
    location.reload();
}