let score = 0;

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
    document.querySelector("#oel").classList.add("fade_in");
    document.querySelector("#oel2").classList.add("fade_in");
    document.querySelector("#oel3").classList.add("fade_in");
    document.querySelector("#oel4").classList.add("fade_in");
    document.querySelector("#oel5").classList.add("fade_in");
    document.querySelector("#saft").classList.add("fade_in");
    document.querySelector("#saft2").classList.add("fade_in");
    document.querySelector("#kaffe").classList.add("fade_in");
    document.querySelector("#kaffe2").classList.add("fade_in");

    document.querySelector("#oel").addEventListener("click", clickOel);
    document.querySelector("#oel2").addEventListener("click", clickOel);
    document.querySelector("#oel3").addEventListener("click", clickOel);
    document.querySelector("#oel4").addEventListener("click", clickOel);
    document.querySelector("#oel5").addEventListener("click", clickOel);

    document.querySelector("#saft").addEventListener("click", clickSaft);
    document.querySelector("#saft2").addEventListener("click", clickSaft);

    document.querySelector("#kaffe").addEventListener("click", clickKaffe);
    document.querySelector("#kaffe2").addEventListener("click", clickKaffe);
}

function clickOel() {
    console.log("klik på oel");
    score++;
    console.log(score);

    document.querySelector("#point").innerHTML = score;

    console.log(this);
    this.classList.remove("fade_in");
    this.classList.add("fade_out");
    this.removeEventListener("click", clickOel);
}

function clickSaft() {
    console.log("klik på saft");
    score -= 2;
    console.log(score);

    document.querySelector("#point").innerHTML = score;

    console.log(this);
    this.classList.remove("fade_in");
    this.classList.add("fade_out");
    this.removeEventListener("click", clickSaft);

}

function clickKaffe() {
    console.log("klik på kaffe");
    score = 0;
    console.log(score);

    document.querySelector("#point").innerHTML = score;

    console.log(this);
    this.classList.remove("fade_in");
    this.classList.add("fade_out");
    this.removeEventListener("click", clickKaffe);
    document.querySelector("#gameover").classList.remove("hide");

}
