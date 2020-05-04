// $( '#upArrow' ).click(function() {
// logMessage("up Arrow called");
//   changeOpacity();
// });
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

$("#eye2").mouseover(function(){
  logMessage(" eye 2 hover")
    $("body").css("background-image","url(drawing/sad1.gif")
    // $("#sheep").text("No! We should look for him! He likes to nap in those caves over there, maybe he fell asleep?")
    // $("#sheep").css({ 'margin-left': '0px'})
    // console.log(iter)
    // iter++}
    // if (iter>2){
    //     $("#sheep").css("display","block")
    //     $("#sheep").text("No! We should look for him! He likes to nap in those caves over there, maybe he fell asleep?")
    //     $("#sheep").css({ 'margin-left': '0px'})
    //     console.log(iter)   
    // }
})




// function changeOpacity1(){
// 	logMessage("change Opacity1 Called");
// 	let rain1 = document.getElementById('rain1');	
// 	rain1.style.opacity = 1;

// }

// function changeOpacity2(){
// 	logMessage("change Opacity2 Called");
// 	let rain2 = document.getElementById('rain2');	
// 	rain2.style.opacity = 1;

// }

// function changeOpacity3(){
// 	logMessage("change Opacity3 Called");
// 	let rain3 = document.getElementById('rain3');	
// 	rain3.style.opacity = 1;

// }

// // function opacity1(){
// // 	logMessage("no Opacity1 Called");
// // 	let rain1 = document.getElementById('rain1');	
// // 	rain1.style.opacity = 0;

// // }

// // function opacity2(){
// // 	logMessage("no Opacity2 Called");
// // 	let rain2 = document.getElementById('rain2');	
// // 	rain2.style.opacity = 0;

// // }

// // function opacity3(){
// // 	logMessage("no Opacity3 Called");
// // 	let rain3 = document.getElementById('rain3');	
// // 	rain3.style.opacity = 1;

// // }

function logMessage(str){
	console.log(str);

// }

// var count = 2;

// // function count(){


// //     if (count == 1) {
// //       // come code
// //       changeOpacity1();
// //     }

// //     if (count == 2) {
// //       // come code
// //       changeOpacity2();
// //     }


// //     if (count == 3) {
// //       // come code
// //       changeOpacity3();
// //     }





// //   }

//   function upClick()
// {
// 	logMessage("upClick");
// 	$('#upArrow').click(function () {
//     count += 1;
//     // if (count == 1) {
//     //   // come code
//     //   logMessage("rain1")
//     //   changeOpacity1();
//     //   opacity2();
//     //   opacity3();
//     // }

// })
// 	if (count == 1) {
//       // come code
//       // logMessage("rain1")
//       changeOpacity1();
//       // opacity2();
//       // opacity3();
//     }

//     else if (count == 2) {
//       // come code
//       changeOpacity2();
//       // changeOpacity1();
//       // opacity3();
//     }


//     else if (count == 3) {
//       // come code
//       changeOpacity3();
//   }
//       // changeOpacity2();
//       // changeOpacity1();
//     // }
// }

// function downClick()
// {
// 	logMessage("downClick");
// 	$('#downArrow').click(function () {
//     count += 1;
// })


//     if (count == 1) {
//       // come code
//       changeOpacity1();
//     }

//     if (count == 2) {
//       // come code
//       changeOpacity2();
//     }


//     if (count == 3) {
//       // come code
//       changeOpacity3();
//     }
// }


// // function upClick ()
// // {
// // 	logMessage("upClick");
// // 	$('#upArrow').click(function () {
// //     count += 1;
// // })
// // }

// // function downClick ()
// // {
// // 	logMessage("downClick");
// // 	$('#downArrow').click(function () {
// //     count += 1;
// // })
// // }

