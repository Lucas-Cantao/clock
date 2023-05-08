 function horario(){
    let hora = document.querySelector(".hora")
    let minuto = document.querySelector(".minuto")
    let segundo = document.querySelector(".segundo")
    let hor = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds() 

    if(hor<10){
        hor = `0${hor}`
    }
    if(min<10){
        min = `0${min}`
    }
    if(sec<10){
        sec = `0${sec}`
    }

    hora.innerHTML = hor
    minuto.innerHTML = min
    segundo.innerHTML = sec

}

setInterval(horario, 1000)