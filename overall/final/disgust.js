
var $layer_1 = $('.layer-1'),
    $container = $('body'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;


/* calculations from mouse position */

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;



/* transformation based off calculations*/
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
});

let modalBtn5 = $("#control").on("click", theFunction5)
let modal5 = document.querySelector("#modal5")
let closeBtn5 = document.querySelector("#close-btn5")



function theFunction5(){
  console.log("yip!")
  modal5.style.display = "block"
}

//modalBtn5.onclick = function(){
  //console.log('modalPathetic')
 // modal5.style.display = "block"//
//}
closeBtn5.onclick = function(){
  console.log ('close button')
  modal5.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal5){
    modal5.style.display = "none"
  }
}



let modalBtn4 = $("#manipulation").on("click", theFunction4)
let modal4 = document.querySelector("#modal4")
let closeBtn4 = document.querySelector("#close-btn4")



function theFunction4(){
  console.log("yip4")
  modal4.style.display = "block"
}

//modalBtn5.onclick = function(){
  //console.log('modalPathetic')
 // modal5.style.display = "block"//
//}
closeBtn4.onclick = function(){
  console.log ('close button')
  modal4.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal4){
    modal4.style.display = "none"
  }
}


let modalBtn3 = $("#esteem").on("click", theFunction3)
let modal3 = document.querySelector("#modal3")
let closeBtn3 = document.querySelector("#close-btn3")



function theFunction3(){
  console.log("yipyipyip!")
  modal3.style.display = "block"
}

//modalBtn5.onclick = function(){
  //console.log('modalPathetic')
 // modal5.style.display = "block"//
//}
closeBtn3.onclick = function(){
  console.log ('close button')
  modal3.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal3){
    modal3.style.display = "none"
  }
}

let modalBtn2 = $("#sexism").on("click", theFunction2)
let modal2 = document.querySelector("#modal2")
let closeBtn2 = document.querySelector("#close-btn2")



function theFunction2(){
  console.log("yip!")
  modal2.style.display = "block"
}

//modalBtn5.onclick = function(){
  //console.log('modalPathetic')
 // modal5.style.display = "block"//
//}
closeBtn2.onclick = function(){
  console.log ('close button')
  modal2.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal2){
    modal2.style.display = "none"
  }
}

let modalBtn = $("#hygiene").on("click", theFunction)
let modal = document.querySelector("#modal")
let closeBtn = document.querySelector("#close-btn")



function theFunction(){
  console.log("yip!")
  modal.style.display = "block"
}

//modalBtn5.onclick = function(){
  //console.log('modalPathetic')
 // modal5.style.display = "block"//
//}
closeBtn.onclick = function(){
  console.log ('close button')
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
















