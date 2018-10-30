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
}

function hideStart() {
    console.log("hide start")
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("shake");
    document.querySelector("#start").classList.add("hide");

    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game")
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
}
