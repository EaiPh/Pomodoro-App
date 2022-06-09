document.querySelector('#clock').innerText= "17:59"
//mostrar a central de configurações 
let openSet= document.querySelector('#openSet')
openSet.addEventListener("click", () => {
   clearInterval(pause_sb)
   clearInterval(tmp)
   clearInterval(pause_lb)
   document.querySelector('.settings').style.visibility= "visible"
})

let closeSet= document.querySelector('#closeSet')
closeSet.addEventListener("click", () => {
   document.querySelector('.settings').style.visibility= "hidden"
})
closeSet.addEventListener("mouseup", () => {
   closeSet.style.background= "#cac9c9"
})

// pomodoro
let pause_sb;
let tmp;
let tPomodoro= document.querySelector('#tPomodoro')
tPomodoro.addEventListener("click", () => {
   clearInterval(tmp)
   clearInterval(pause_sb)
   clearInterval(pause_lb)
   
   tmp= setInterval( function() {
      count()
   }, 1000)
}) 

let pomodoro= document.querySelector('#pomodoro')
let min= pomodoro.value == "" ? 25 : Number(pomodoro.value) 
let sec= 0
function count() {
   
   if (sec == 0) {
      min--
      sec= 60
   } else {
      sec--
   }
   document.querySelector('#clock').innerText= `${min}:${sec <= 9 ? "0"+sec : sec}`
   
   if (min == 0 && sec == 0) {
      clearInterval(tmp)
      sound()
   }
}

 // Pausa curta
let shortBreak= document.querySelector('#shortBreak')
let minSb= shortBreak.value == "" ? 5 : Number(shortBreak.value)
let secSb= 0
 
document.querySelector('#sBreak').addEventListener("click", () => {
   clearInterval(tmp)
   clearInterval(pause_lb)
   clearInterval(pause_sb)
   document.querySelector('#clock').innerText= `${shortBreak.placeholder}:00`
   
   pause_sb= setInterval( function() {
      pauseSb()
   }, 1000)
})

function pauseSb() {
   
   if (secSb == 0) {
      minSb--
      secSb= 60
   } else {
      secSb--
   }
   document.querySelector('#clock').innerHTML= `${minSb}:${secSb <= 9 ? "0"+secSb : secSb}`
   
   if (minSb == 0 && secSb == 0) {
      clearInterval(pause_sb)
      sound()
   }
}

// Pausa longa
let longBreak= document.querySelector('#longBreak')
let minLb= longBreak.value == "" ? 15 : Number(longBreak.value)
let secLb= 0
let pause_lb;
document.querySelector('#lBreak').addEventListener("click", () => {
   clearInterval(tmp)
   clearInterval(pause_sb)
   clearInterval(pause_lb)
   document.querySelector('#clock').innerText= `${longBreak.value}:00`
      
   pause_lb= setInterval( function() {
      pauseLb()
   }, 1000)
})

function pauseLb() {
      
   if (secLb == 0) {
      minLb--
      secLb= 60
   } else {
      secLb--
   }
   document.querySelector('#clock').innerHTML= `${minLb}:${secLb <= 9 ? "0"+secLb : secLb}`
   
   if (minLb == 0 && secLb == 0) {
      clearInterval(pause_lb)
      sound()
   }
}

// aplicar as configurações.

document.querySelector('#apply').addEventListener("click", () => {
   clearInterval(tmp)
   clearInterval(pause_sb)
   clearInterval(pause_lb)
   //aplicar pomodoro
   let time= document.querySelector('#pomodoro').value
   document.querySelector('#clock').innerText= `${time}:00`
   document.querySelector('.settings').style.visibility= "hidden"
   
   if (pomodoro.value == "") {
      min= 25
      sec= 0
   } else {
      min= Number(pomodoro.value)
      sec= 0
   }
   
   tmp= setInterval( function() {
      count()
   }, 1000)
})

//Pause
document.querySelector('.time').addEventListener("click", () => {
   clearInterval(tmp)
   clearInterval(pause_sb)
   clearInterval(pause_lb)
   // conf pra remover o background dos elementos
   tPomodoro.style.background= ""
   document.querySelector('#sBreak').style.background= ""
   document.querySelector('#lBreak').style.background= ""
})

// MUDAR FONT
let font= document.getElementsByName('font')

font[0].addEventListener("click", () => {
      font[0].style.color= "white"
      font[0].style.background= "black"
      document.getElementsByTagName('h1')[0].style= ""
      tPomodoro.style= ""
      document.querySelector('#sBreak').style= ""
      document.querySelector('#lBreak').style= ""
      document.querySelector('#clock').style= ""
      document.querySelector('#pause').style= ""
      //remover as cores do outro elemento
      font[1].style.color= ""
      font[1].style.background= ""
      font[2].style.color= ""
      font[2].style.background= ""
})

font[1].addEventListener("click", () => {
      font[1].style.color= "white"
      font[1].style.background= "black"
      document.getElementsByTagName('h1')[0].style= "font-family: 'Manrope', sans-serif;"
      tPomodoro.style= "font-family: 'Manrope', sans-serif;"
      document.querySelector('#sBreak').style= "font-family: 'Manrope', sans-serif;"
      document.querySelector('#lBreak').style= "font-family: 'Manrope', sans-serif;"
      document.querySelector('#clock').style= "font-family: 'Manrope', sans-serif;"
      document.querySelector('#pause').style= "font-family: 'Manrope', sans-serif;"
      //remover as cores do outro elemento
      font[0].style.color= ""
      font[0].style.background= ""
      font[2].style.color= ""
      font[2].style.background= ""
})

font[2].addEventListener("click", () => {
      font[2].style.color= "white"
      font[2].style.background= "black"
      document.getElementsByTagName('h1')[0].style= "font-family: 'Oswald', sans-serif;"
      tPomodoro.style= "font-family: 'Oswald', sans-serif;"
      document.querySelector('#sBreak').style= "font-family: 'Oswald', sans-serif;"
      document.querySelector('#lBreak').style= "font-family: 'Oswald', sans-serif;"
      document.querySelector('#clock').style= "font-family: 'Oswald', sans-serif;"
      document.querySelector('#pause').style= "font-family: 'Oswald', sans-serif;"
      //remover as cores do outro elemento
      font[1].style.color= ""
      font[1].style.background= ""
      font[0].style.color= ""
      font[0].style.background= ""
})
// MUDAR COR

let col= document.getElementsByClassName('color')
//Cor vermelha
let red= false
col[0].addEventListener("click", () => {
   document.querySelector('.time').style= ""
   red= true
   cyan= false
   purple= false
})
//Cor ciano
let cyan= false
col[1].addEventListener("click", () => {
   document.querySelector('.time').style= "border: 5px solid cyan;"
   cyan= true
   purple= false
   red= false
})
//Cor roxa
let purple= false
col[2].addEventListener("click", () => {
   document.querySelector('.time').style= "border: 5px solid #aa62ff;"
   purple= true
   cyan= false
   red= false
})
tPomodoro.addEventListener("click", () => {
   if (purple) {
      tPomodoro.style= "background: #aa62ff;"
      document.querySelector('#sBreak').style.background= ""
      document.querySelector('#lBreak').style.background= ""
   } else if (cyan) {
      tPomodoro.style= "background: cyan;"
      document.querySelector('#sBreak').style.background= ""
      document.querySelector('#lBreak').style.background= ""
   } else if (red) {
      tPomodoro.style= "background: #ff7d7d;"
      document.querySelector('#sBreak').style.background= ""
      document.querySelector('#lBreak').style.background= ""
   }
})
document.querySelector('#sBreak').addEventListener("click", () => {
   if (purple) {
      document.querySelector('#sBreak').style= "background: #aa62ff;"
      tPomodoro.style.background= ""
      document.querySelector('#lBreak').style.background= ""
   } else if (cyan) {
      document.querySelector('#sBreak').style= "background: cyan;"
      tPomodoro.style.background= ""
      document.querySelector('#lBreak').style.background= ""
   } else if (red) {
      document.querySelector('#sBreak').style= "background: #ff7d7d;"
      tPomodoro.style.background= ""
      document.querySelector('#lBreak').style.background= ""
   }
})
document.querySelector('#lBreak').addEventListener("click", () => {
   if (purple) {
      document.querySelector('#lBreak').style= "background: #aa62ff;"
      tPomodoro.style.background= ""
      document.querySelector('#sBreak').style.background= ""
   } else if (cyan) {
      document.querySelector('#lBreak').style= "background: cyan;"
      tPomodoro.style.background= ""
      document.querySelector('#sBreak').style.background= ""
   } else if (red) {
      document.querySelector('#lBreak').style= "background: #ff7d7d;"
      tPomodoro.style.background= ""
      document.querySelector('#sBreak').style.background= ""
   }
})

// VALIDAÇÕES E AJUSTES

let inputVali= document.getElementsByName('input')
let nInputVal;
for (let i= 0; i < inputVali.length; i++) {
   inputVali[i].addEventListener("keyup", () => {
     // nInputVal= Number(inputVali[i].value)
      
      if (Number(inputVali[i].value) > 60) {
         inputVali[i].value= 60
      }
   })
}

   // tocar quando a contagem chegar em 0
function sound() {
   const sound= new Audio('toque/toquePomodoroApp.mp3')
   sound.play()
}