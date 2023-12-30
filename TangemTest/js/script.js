let closeButton = document.querySelectorAll(".btn__close-main_alert"),
    alertMain = document.querySelectorAll(".main_alert");

if(localStorage.getItem("alert")) {
    alertMain[0].remove();
}

closeButton[0].addEventListener("click", (e) => {
    localStorage.setItem("alert", true)
    alertMain[0].remove();
})