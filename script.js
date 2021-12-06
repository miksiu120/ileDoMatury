let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let days = document.querySelector(".days")
let seconds = document.querySelector(".seconds")

let matury = new Date("May 6, 2022 09:00:00")

function show() {
    let today = Date.now();
    let freeTime= matury - today
    days.textContent=parseInt((freeTime)/(3600000*24))+" dni";
    hours.textContent=parseInt((freeTime)/(3600000))+" godzin"
    minutes.textContent=parseInt((freeTime)/(60000))+" minut"
    seconds.textContent=parseFloat((freeTime)/(1000))+" sekund"
}

setInterval(show,20)



