console.log("the message!");
let theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');


//console.log(theTxt)


theButton.addEventListener('click', isClicked);
//isClicked()
function isClicked(){
	console.log("clicked");
	// theTxt.textContent.textDecorationStyle = "dashed";
	theBody.style.backgroundColor = "blue";
	theTxt.textContent = "you turned me blue!";
	// theBody.style.backgroundImage= "url(https://i.ytimg.com/vi/HPSy9ru81xU/maxresdefault.jpg)";
}