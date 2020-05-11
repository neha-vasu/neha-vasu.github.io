let modalBtn5 = $("#lanternKDrama").on("click", theFunction5)
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


let modalBtn4 = $("#lanternDream").on("click", theFunction4)
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

let modalBtn3 = $("#lanternHugs").on("click", theFunction3)
let modal3 = document.querySelector("#modal3")
let closeBtn3 = document.querySelector("#close-btn3")



function theFunction3(){
  console.log("yip!")
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

let modalBtn2 = $("#lanternArt").on("click", theFunction2)
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



let modalBtn = $("#lanternLove").on("click", theFunction)
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







// $( "#lanternKDrama" ).mouseover(
//     function() {
//         $("joyHeading").textContent = "Korean Dramas";
//     }, 
//     function() {
//         $("joyHeading").textContent = 'Joy';
//     }
// );


// let joyHeading = document.querySelector("#joyHeading");
// let lanternKdrama = document.querySelector("#lanternKDrama");
// let lanternArt = document.querySelector("#lanternArt");
// let lanternLove = document.querySelector("#lanternLove");
// let lanternHugs = document.querySelector("#lanternHugs");
// let lanternKdrama.addEventListener('mouseover', is1);
// let lanternArt.addEventListener('mouseover', is2);
// let lanternLove.addEventListener('mouseover', is3);
// let lanternHugs.addEventListener('mouseover', is4);
// let lanternDream.addEventListener('mouseover', is5);
// // lanternKDrama.addEventListener('mouseout', default);

// function is1(){
// 	console.log("mouseover");
// 	// theTxt.textContent.textDecorationSttheBody.style.backgroundColor = "plum";
// 	joyHeading.textContent = "korean drama";
// 	joyHeading.style.fontSize = "60px";
// 	// joyHeading.style.transition-duration = "1.5s";
// 	}

// 	function is2(){
// 	console.log("mouseover");
// 	// theTxt.textContent.textDecorationSttheBody.style.backgroundColor = "plum";
// 	joyHeading.textContent = "art";
// 	joyHeading.style.fontSize = "60px";
// 	// joyHeading.style.transition-duration = "1.5s";
// 	}
// 	function is3(){
// 	console.log("mouseover");
// 	// theTxt.textContent.textDecorationSttheBody.style.backgroundColor = "plum";
// 	joyHeading.textContent = "humans I love";
// 	joyHeading.style.fontSize = "60px";
// 	// joyHeading.style.transition-duration = "1.5s";
// 	}
// 	function is4(){
// 	console.log("mouseover");
// 	// theTxt.textContent.textDecorationSttheBody.style.backgroundColor = "plum";
// 	joyHeading.textContent = "hugs";
// 	joyHeading.style.fontSize = "60px";
// 	// joyHeading.style.transition-duration = "1.5s";
// 	}

// 	function is5(){
// 	console.log("mouseover");
// 	// theTxt.textContent.textDecorationSttheBody.style.backgroundColor = "plum";
// 	joyHeading.textContent = "wander";
// 	joyHeading.style.fontSize = "60px";
// 	// joyHeading.style.transition-duration = "1.5s";
// 	}

// function default()
// {
// 	joyHeading.textContent = "Jooooy";
// }