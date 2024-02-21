var displayFunction = () => {
    var mainTag = document.createElement("div");
    mainTag.setAttribute("class", "main");
    mainTag.style.width = "700px";
    mainTag.style.margin = "70px auto";

    var question = document.createElement("h1");
    question.setAttribute("class", "question");
    question.innerText = "Do You Love Me ?";

    var image = document.createElement("div");
    image.setAttribute("class", "img");
    image.style.backgroundImage = "url('image/giphy.gif')";
    image.style.height = "274px";
    image.style.width = "500px";
    image.style.backgroundPosition = "center";
    image.style.backgroundRepeat = "no-repeat";
    image.style.margin = "0px auto";

    var button = document.createElement("div");
    button.setAttribute("class", "btn");
    button.style.display = "flex";
    button.style.justifyContent = "space-evenly";
    button.style.marginTop = "40px";

    var yes = document.createElement("div");
    yes.setAttribute("class", "yes");
    yes.innerHTML = '<input type="button" value="Yes" onclick="myYes()">';

    var no = document.createElement("div");
    no.setAttribute("class", "no");
    no.innerHTML = '<input type="button" value="No" onmouseover="myNo()">';

    var footer = document.createElement("div");
    footer.setAttribute("class", "foot");
    footer.innerText = "Made With ❤︎ By Abhay";
    footer.style.textAlign = "center";
    footer.style.marginTop = "60px";
    footer.style.fontSize = "15px";
    footer.style.color = "grey";

    mainTag.appendChild(question);
    mainTag.appendChild(image);
    button.appendChild(yes);
    button.appendChild(no);
    mainTag.appendChild(button);
    mainTag.appendChild(footer);

    document.querySelector(".miniProject").append(mainTag);

};

var myYes = () => {
    document.querySelector(".img").style.backgroundImage = "url(image/second.gif)"
    var count = 1;
    var myTime = setInterval(() => {
        document.querySelector(".question").innerHTML = `I love You Too 𓆩❤️𓆪 ${count} Times`;
        count++;
        if (count ==51){
            clearInterval(myTime)
        }
    },100);
    document.querySelector(".yes").innerHTML = "";
    document.querySelector(".no").innerHTML = "";
}
var myNo = () => {
    document.querySelector(".no").innerHTML = "";
}
displayFunction();