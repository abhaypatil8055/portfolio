 var getResult = () => {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomImage = "images/dice" + randomNumber1 + ".png";
            var img1 = document.querySelector(".img1").src = `${randomImage}`;

            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            var randomImage2 = "images/dice" + randomNumber2 + ".png";
            var img2 = document.querySelector(".img2").src = `${randomImage2}`;

            if (randomNumber1 > randomNumber2) {
                document.querySelector(".result").innerHTML = "Player 1 is winner";
            } else if (randomNumber2 > randomNumber1) {
                document.querySelector(".result").innerHTML = "Player 2 is winner";
            } else {
                document.querySelector(".result").innerHTML = "Try Again";
            }
            setTimeout(() => {
                document.querySelector(".result").innerHTML = "Thank You";
            }, 2000);
        }

