let timeLeft = 20;
let score = 0;
let life = 2;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start")
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("shake");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#set").addEventListener("click", showSettings);
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
}

function showSettings() {
    console.log("showSettings")
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#kryds").addEventListener("click", showStart);
}


function hideStart() {
    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("shake");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game")
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#drink1").classList.add("type1", "fade_in");
    document.querySelector("#drink2").classList.add("type1", "fade_in");
    document.querySelector("#drink3").classList.add("type1", "fade_in");
    document.querySelector("#drink4").classList.add("type3", "fade_in");
    document.querySelector("#drink5").classList.add("type2", "fade_in");


    document.querySelector("#drink1").addEventListener("click", clickDrink);
    document.querySelector("#drink2").addEventListener("click", clickDrink);
    document.querySelector("#drink3").addEventListener("click", clickDrink);
    document.querySelector("#drink4").addEventListener("click", clickDrink);
    document.querySelector("#drink5").addEventListener("click", clickDrink);
    //    document.querySelector("#drink6").addEventListener("click", clickDrink);
    //    document.querySelector("#drink7").addEventListener("click", clickDrink);
    //    document.querySelector("#drink8").addEventListener("click", clickDrink);
    //    document.querySelector("#drink9").addEventListener("click", clickDrink);


    //document.querySelector(".type2").addEventListener("click", clickDrink);

    //document.querySelector(".type3").addEventListener("click", clickDrink);

    document.querySelector("#point").innerHTML = "" + score;
    timeLeftFc();


}

function clickDrink() {
    console.log("klik på drink");

    if (this.classList.contains("type1")) {
        console.log("Oel");
        document.querySelector("#point").innerHTML = score;
        score++;
        console.log(score);
        goingOel();

    } else if (this.classList.contains("type2")) {
        console.log("saft");
        document.querySelector("#point").innerHTML = score;
        score -= 2;
        console.log(score);
        life--;
        goingOel();

    } else {
        console.log("kaffe");
        document.querySelector("#point").innerHTML = score;
        life -= 2;
        console.log(score);
        goingKaffe();
    }
    this.classList.remove("fade_in");
    this.classList.add("fade_out");
    this.addEventListener("animationend", goingOel);
}

function goingOel() {
    console.log("goingOel");
    this.className = "";
    document.querySelector("type" + Math.floor((Math.random() * 3) + 1));
    document.querySelector("pos" + Math.floor((Math.random() * 9) + 1));

}



function timeLeftFc() {
    console.log("tid tilbage" + timeLeft)

    if (timeLeft > 0) {

        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else {
        timesUp();
    }
}

function timesUp() {
    console.log("timesUp");

    if (score > 10) {
        levelComplete();
    } else if (score < 10) {
        gameOver();
    }
}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#kryds").addEventListener("click", showStart);
    document.querySelector("#spiligen").addEventListener("click", startGame);
    document.querySelector("#hus").addEventListener("click", showStart);
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#kryds").addEventListener("click", showStart);
    document.querySelector("#spiligen").addEventListener("click", startGame);
    document.querySelector("#hus").addEventListener("click", showStart);
}


//function myGroentsagMove() {
//    console.log("myGroentsagMove")
//    document.querySelector("#mad" + myRandom()).classList.add("groentsag");
//}
//
//function myRandom() {
//    let tilfaeldigttal = Math.floor((Math.random() * 10) + 1);
//    return tilfaeldigttal;
//}


//function goingSaft() {
//    console.log("goingSaft")
//    this.className = "";
//    document.querySelector("pos" + Math.floor((Math.random() * 9) + 1));
//    document.querySelector("type" + Math.floor((Math.random() * 3) + 1));
//
//}
//
//function goingKaffe() {
//    console.log("goingKaffe")
//    this.className = "";
//    document.querySelector("pos" + Math.floor((Math.random() * 9) + 1));
//    document.querySelector("type" + Math.floor((Math.random() * 3) + 1));
//    document.querySelector("#gameover").classList.remove("hide");
//
//}

//function clickOel() {
//    console.log("klik på oel");
//    score++;
//    console.log(score);
//
//    document.querySelector("#point").innerHTML = score;
//
//    console.log(this);
//    this.classList.remove("fade_in");
//    this.classList.add("fade_out");
//    this.removeEventListener("click", clickOel);
//    goingOel();
//}
//function clickSaft() {
//    console.log("klik på saft");
//    score -= 2;
//    console.log(score);
//
//    document.querySelector("#point").innerHTML = score;
//
//    console.log(this);
//    this.classList.remove("fade_in");
//    this.classList.add("fade_out");
//    this.removeEventListener("click", clickSaft);
//
//}
//
//function clickKaffe() {
//    console.log("klik på kaffe");
//    score = 0;
//    console.log(score);
//
//    document.querySelector("#point").innerHTML = score;
//
//    console.log(this);
//    this.classList.remove("fade_in");
//    this.classList.add("fade_out");
//    this.removeEventListener("click", clickKaffe);
//    document.querySelector("#gameover").classList.remove("hide");
//
//}
