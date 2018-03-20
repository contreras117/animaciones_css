const $btnNotification = document.getElementById("btnNotification");
const $divNotification = document.getElementById("notification");

var count = 0;

$btnNotification.addEventListener("click", () => {
    count++;
    $divNotification.setAttribute("data-count", count);
    $divNotification.classList.add("ring");
    $divNotification.classList.add("show-count");
});

$divNotification.addEventListener('animationend', () =>{
    $divNotification.classList.remove("ring");
});