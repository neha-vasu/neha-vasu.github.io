let eye1 = $("#eye1").on("click", thunderGray)
let eye7 = $("#eye7").on("click", thunderGray)
let eye14 = $("#eye14").on("click", thunderGray)
let button = document.querySelector("button")
let body = document.querySelector("body")
function thunderGray()
{
  console.log("yip yip!")
body.style.backgroundImage ="url(drawing/blue1.gif)";
body.style.backgroundSize = "cover";
}




let eye2 = $("#eye2").on("click", gradient1)
let eye8 = $("#eye8").on("click", gradient1)
let eye15 = $("#eye15").on("click", gradient1)
let eye13 = $("#eye13").on("click", gradient1)


function gradient1()
{
  console.log("yip yip!")
body.style.backgroundImage ="url(drawing/blue2.gif)";
body.style.backgroundSize = "cover";
}

let eye3 = $("#eye3").on("click", gradient2)
let eye9 = $("#eye9").on("click", gradient2)
let eye16 = $("#eye16").on("click", gradient2)


function gradient2()
{
  console.log("yip yip!")
body.style.backgroundImage ="url(drawing/rain4.jpg)";
body.style.backgroundSize = "cover";
// button.style.color = "#9df8ff";
// button.style.textShadow = "0.1vw 0.1vw black";

}

let eye4 = $("#eye4").on("click", gradient3)
let eye10 = $("#eye10").on("click", gradient3)
let eye17 = $("#eye17").on("click", gradient3)


function gradient3()
{
  console.log("yip yip!")
body.style.backgroundImage ="url(drawing/rain5.jpg)";
body.style.backgroundSize = "cover";
// button.style.color = "#9df8ff";
// button.style.textShadow = "0.1vw 0.1vw black";

}

let eye5 = $("#eye5").on("click", gradient4)
let eye11 = $("#eye11").on("click", gradient4)
let eye6 = $("#eye6").on("click", gradient4)
let eye12 = $("#eye12").on("click", gradient4)


function gradient4()
{
  console.log("yip yip!")
  body.style.backgroundColor ="white";
  body.style.backgroundImage = "none";
// body.style.backgroundImage ="url(drawing/rain5.jpg)";
// body.style.backgroundSize = "cover";
// button.style.color = "#9df8ff";
// button.style.textShadow = "0.1vw 0.1vw black";

}




  // $(body).css("background-image", "url(drawing/thunder.gif)");
  // console.log("thunder");


// let theButton = document.querySelector("#firstButton");
// let theTxt = document.querySelector('h2');
// let theBody = document.querySelector('body');


// //console.log(theTxt)


// theButton.addEventListener('click', isClicked);
// //isClicked()
// function isClicked(){
//   console.log("clicked");
//   // theTxt.textContent.textDecorationStyle = "dashed";
//   theBody.style.backgroundColor = "blue";
//   theTxt.textContent = "you turned me blue!";
//   // theBody.style.backgroundImage= "url(https://i.ytimg.com/vi/HPSy9ru81xU/maxresdefault.jpg)";
// }


// let modalBtn5 = document.getElementById("#modal-btn5")
let modalBtn5 = $("#modal-btn5").on("click", theFunction5)
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



// let modalBtn5 = document.getElementById("#modal-btn5")
let modalBtn4 = $("#modal-btn4").on("click", theFunction4)
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


// // let modalBtn5 = document.getElementById("#modal-btn5")
let modalBtn3 = $("#modal-btn3").on("click", theFunction3)
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


let modalBtn2 = $("#modal-btn2").on("click", theFunction2)
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

let modalBtn = $("#modal-btn").on("click", theFunction)
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


// let modalBtn2 = document.getElementById("modal-btn2")
// let modal2 = document.querySelector(".modal2")
// let closeBtn2 = document.querySelector(".close-btn2")
// modalBtn2.onclick = function(){
//   modal2.style.display = "block"
// }
// closeBtn2.onclick = function(){
//   modal2.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target == modal2){
//     modal2.style.display = "none"
//   }
// }

// let modalBtn3 = document.getElementById("modal-btn3")
// let modal3 = document.querySelector(".modal3")
// let closeBtn3 = document.querySelector(".close-btn3")
// modalBtn3.onclick = function(){
//   modal3.style.display = "block"
// }
// closeBtn3.onclick = function(){
//   modal3.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target == modal3){
//     modal3.style.display = "none"
//   }
// }

// let modalBtn4 = document.getElementById("modal-btn4")
// let modal4 = document.querySelector(".modal4")
// let closeBtn4 = document.querySelector(".close-btn4")
// modalBtn4.onclick = function(){
//   modal4.style.display = "block"
// }
// closeBtn4.onclick = function(){
//   modal4.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target == modal4){
//     modal4.style.display = "none"
//   }
// }
// function logMessage(str){
//   console.log(str);
// }

var count = 0;


// //   }

//   function upClick()
// {
//   logMessage("upClick");
//   $('#upArrow').click(function () {
//     count += 1;
//     // if (count == 1) {
//     //   // come code
//     //   logMessage("rain1")
//     //   changeOpacity1();
//     //   opacity2();
//     //   opacity3();
//     // }

// })
//   if (count === 1) {
//     logMessage("1 click");
//       // come code
//       // logMessage("rain1")
//       // changeOpacity1();
//       // opacity2();
//       // opacity3();
//       $("#rain1").css("display", "");
//       $("#rain2").css("display", "none");
//       $("#rain3").css("display", "none");
//     }

//     else if (count === 2) {
//       logMessage("2 clicks");
//       // come code
//       // changeOpacity2();
//       // changeOpacity1();
//        $("#rain1").css("display", "");
//       $("#rain2").css("display", "");
//       $("#rain3").css("display", "none");
//       // opacity3();
//     }


//     else if (count === 3) {
//       logMessage("3 clicks");
//       // come code
//       // changeOpacity3();
//       $("#rain1").css("display", "");
//       $("#rain2").css("display", "");
//       $("#rain3").css("display", "");
//   }
//       // changeOpacity2();
//       // changeOpacity1();
//     // }
// }