console.log("the message!");
let tv = document.querySelector(".tv");
let tvImg = document.querySelector(".TVimg")
// let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
let under = document.querySelector ('.under');
let under2 = document.querySelector ('.under2');
let under3 = document.querySelector ('.under3');
let seen = document.querySelector ('.seen');
//console.log(theTxt)


tv.addEventListener('click', isClicked);
under.addEventListener('click', isClicked1);
under2.addEventListener('click', isClicked2);
under3.addEventListener('click', isClicked3);
//isClicked()
function isClicked(){
	console.log("clicked");
	// theTxt.textContent.textDecorationStyle = "dashed";

	// tv.style.backgroundColor = "#caf4fc";
	tv.style.backgroundImage = "url(lightest.jpeg)";
	tv.style.borderColor = "#ACEEFA";

	tvImg.style.opacity = "0";
	tv.textContent = "Medium of the Massage";
	tv.style.zIndex="4";
	// tv.style.fontSize = "3vh"''
// 	firstButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg)";
// firstButton.style.backgroundSize= "cover";
}

function isClicked1(){
	console.log("clicked1");
	// theTxt.textContent.textDecorationStyle = "dashed";

	// tv.style.backgroundColor = "#caf4fc";
	tv.style.backgroundImage = "url(light.png)";
	tv.style.backgroundSize = "cover";
	tv.style.borderColor = "#34c6e0";
under.style.backgroundImage = "url(light.png)";
	tvImg.style.opacity = "0";
	under.style.zIndex="5";
	under.textContent = "“In television, images are projected at you. You are the screen. The images wrap around you. You are the vanishing point. This creates a sort of inwardness, a sort of reverse perspective which has much in common with Oriental art.”";
	// tv.style.fontSize = "5vh";

// 	firstButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg)";
// firstButton.style.backgroundSize= "cover";
}
function isClicked2(){
	console.log("clicked2");
	// theTxt.textContent.textDecorationStyle = "dashed";

	// tv.style.backgroundColor = "#caf4fc";
	tv.style.backgroundImage = "url(white.jpg)";
	tv.style.backgroundSize = "cover";
	tv.style.borderColor = "#34c6e0";
under2.style.backgroundImage = "url(white.jpg)";
	tvImg.style.opacity = "0";
	under2.style.zIndex="8";
	under2.textContent = "The wheel is an extension of the foot, the book is an extension of the eye, clothing an extension of the skin, electric circuitry an extension of the central nervous system.” The extension of any one sense alters the way we think and act—the way we perceive the world.”";
	under2.style.color="black";
	under2.style.textShadow ="4px 4px #34c6e0";

	// tv.style.fontSize = "5vh";

// 	firstButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg)";
// firstButton.style.backgroundSize= "cover";
}

function isClicked3(){
	console.log("clicked3");
	// theTxt.textContent.textDecorationStyle = "dashed";

	// tv.style.backgroundColor = "#caf4fc";
	tv.style.backgroundImage = "url(dark.png)";
	tv.style.backgroundSize = "cover";
	tv.style.borderColor = "#34c6e0";
under3.style.backgroundImage = "url(dark.png)";
	tvImg.style.opacity = "0";
	under3.style.zIndex="9";
	under3.textContent = "“Television completes the cycle of the human sensorium. With the omnipresent ear and the moving eye, we have abolished writing, the specialized acoustic-visual metaphor that established the dynamics of Western civilization.”";
	under3.style.color="white";
	under3.style.fontSize = "8vh";

	// tv.style.fontSize = "5vh";

// 	firstButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg)";
// firstButton.style.backgroundSize= "cover";
}
	// #34c6e0
	// #079fba