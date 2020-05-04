let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

let modalBtn2 = document.getElementById("modal-btn2")
let modal2 = document.querySelector(".modal2")
let closeBtn2 = document.querySelector(".close-btn2")
modalBtn2.onclick = function(){
  modal2.style.display = "block"
}
closeBtn2.onclick = function(){
  modal2.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal2){
    modal2.style.display = "none"
  }
}

let modalBtn3 = document.getElementById("modal-btn3")
let modal3 = document.querySelector(".modal3")
let closeBtn3 = document.querySelector(".close-btn3")
modalBtn3.onclick = function(){
  modal3.style.display = "block"
}
closeBtn3.onclick = function(){
  modal3.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal3){
    modal3.style.display = "none"
  }
}

let modalBtn4 = document.getElementById("modal-btn4")
let modal4 = document.querySelector(".modal4")
let closeBtn4 = document.querySelector(".close-btn4")
modalBtn4.onclick = function(){
  modal4.style.display = "block"
}
closeBtn4.onclick = function(){
  modal4.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal4){
    modal4.style.display = "none"
  }
}