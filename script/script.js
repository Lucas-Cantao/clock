let hour = document.querySelector(".hour-number")
let minute = document.querySelector(".minute-number")
let second = document.querySelector(".second-number")
let body = document.querySelector("#body")


function horas(){
    let hor = new Date().getHours()
    let min = new Date().getMinutes()
    let seg = new Date().getSeconds()
    if(hor<10){
        hor = `0${hor}`
    }
    if(min<10){
        min = `0${min}`
    }
    if(seg<10){
        seg = `0${seg}`
    }
    hour.innerHTML = hor
    minute.innerHTML = min
    second.innerHTML = seg
}

setInterval(horas, 1000)
