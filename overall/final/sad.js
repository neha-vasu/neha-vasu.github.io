// let upArrow = document.querySelector("#upArrow");
// let theRain1 = document.querySelector(".rain1");

// theButton.addEventListener('click', isClicked);
// //isClicked()
// function isClicked(){
// 	console.log("clicked");
// 	theRain1.style.opacity = "1";
	
// }

// $('#upArrow').click(e => displayImage());

// function displayImage ()  {
// 	// console.log($(sound.zone).length);
// $('#rain').style.opacity('1');
// }
// 	// if($(rainCounter) == 1)
// 	// {

// 	// 	var rainIcon = document.createElement("IMG");
// 	// 	soundIcon.setAttribute("src", sound.image); 
// 	// 	soundIcon.setAttribute("id", sound.imgID); 

// 	// }

// 	// if($(rainCounter) == 2)
// 	// {
// 	// 	var rainIcon = document.createElement("IMG");
// 	// 	soundIcon.setAttribute("src", sound.image); 
// 	// 	soundIcon.setAttribute("id", sound.imgID); 

// 	// }
// // }

// $( "img" ).click(function() {
//   $( "#upArrow").style.opacity('1');
// }



// document.getElementById("upArrow")

$( '#upArrow' ).click(function() {
	console.log("upArrowOnClick");
  changeOpacity();
});

function changeOpacity(){
	console.log("called");
	let rain1 = document.getElementById('rain1');	
	rain1.style.opacity = 1;

}


// var show = { opacity: "1"};
// $("#upArrow").css(show).on('click', function(){
// 	changeOpacity();
// }

//  {
// 	var show = { opacity: "1"};
// $(".rain1").css(show).on('click', function(){

// }

// })



