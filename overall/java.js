console.log("the message!");
let firstButton = document.querySelector("#firstButton");
let secondButton = document.querySelector("#secondButton");
let thirdButton = document.querySelector("#thirdButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');


//console.log(theTxt)


firstButton.addEventListener('click', isClicked1);
secondButton.addEventListener('click', isClicked2);
thirdButton.addEventListener('click', isClicked3);
//isClicked()
function isClicked1(){
	console.log("clicked");
	// theTxt.textContent.textDecorationStyle = "dashed";
	theBody.style.backgroundColor = "plum";
	theTxt.textContent = "ruff";
	firstButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg)";
firstButton.style.backgroundSize= "cover";
}

function isClicked2(){
	console.log("clicked2");
	// theTxt.textContent.textDecorationStyle = "dashed";
	theBody.style.backgroundColor = "gold";
	theTxt.textContent = "ruff ruff ";
	secondButton.style.backgroundImage= "url(https://bbs.chinadaily.com.cn/data/attachment/forum/201905/17/164145mdpbbz718fo7d1d9.jpg)";
secondButton.style.backgroundSize= "cover";
}

function isClicked3(){
	console.log("clicked3");
	// theTxt.textContent.textDecorationStyle = "dashed";
	theBody.style.backgroundColor = "firebrick";
	theTxt.textContent = "ruff ruff ruff ";
	thirdButton.style.backgroundImage= "url(https://static.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-18-5cdbf368ca280__700.jpg)";
thirdButton.style.backgroundSize= "cover";
}