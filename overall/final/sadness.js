// let rain = []; //will hold all sounds the user adds to song

// // Constructor function for Sound objects
// function Rain(audio="", duration=0, ID="", image = "", zone = "", alt = "") {  
// 	this.audio = new Audio(audio); 
// 	this.audio.volume = 0.3;  
// 	this.duration = duration;  
// 	this.buttonID = ID + "Button";  
// 	this.image = image;  
// 	this.zone = zone;  
// 	this.alt = alt;  
// 	this.imgID = ID + "Img";
// }


// //Create Sound objects
// let monkey = new Rain("assets/sounds/monkeyCry.mp3", 4300, "#monkey", "assets/icons/monkey.png", "#monkeyZone" ); 
// let bird = new Rain("assets/sounds/birds.mp3", 4552, "#bird", "assets/icons/bird.png", "#birdZone");
// let tiger = new Rain("assets/sounds/tiger.mp3", 3200, "#tiger", "assets/icons/tiger.png", "#tigerZone");
// let rain = new Rain("assets/sounds/rain.wav", 4000, "#rain", "assets/icons/rain.png", "#rainZone");
// let rainCounter = 0;

// //Adding single click actions.
// //Specific sound plays when button clicked. (and icon will popup. not yet implemented)
// $('#monkeyButton').click(e => playSound(monkey));
// $('#birdButton').click(e => playSound(bird));
// $('#tigerButton').click(e => playSound(tiger));
// $('#rainButton').click(e => playSound(rain));
// $('#coconutButton').click(e => playSound(coconut));
// $('#frogButton').click(e => playSound(frog));
// $('#snakeButton').click(e => playSound(snake));
// $('#insectButton').click(e => playSound(insect));
// $('#owlButton').click(e => playSound(owl));
// $('#elephantButton').click(e => playSound(elephant));
// $('#playbackButton').click(function() {
// 	playSong();
// });
// $('#undoButton').click(e => undoSoundAddition());

// $('#clearButton').click(e => clearSong());

// // $('#monkeyButton').click(e => scaleImage(monkey));


// function count(){

//     rainCounter = 0;
//     function upClick() {
//     	if($(rainCounter) <= 4)
//     	{
//         $(rainCounter).value = ++i;
//     }
//     }
//     function downClick() {
//     	if($(rainCounter) <= 4 && $(rainCounter) >= 0)
//         $(rainCounter).value = --i;
//     }

// }

// function displayImage ()  {
// 	// console.log($(sound.zone).length);

// 	if($(rainCounter) == 1)
// 	{
// 		var rainIcon = document.createElement("IMG");
// 		soundIcon.setAttribute("src", sound.image); 
// 		soundIcon.setAttribute("id", sound.imgID); 

// 	}

// 	if($(rainCounter) == 2)
// 	{
// 		var rainIcon = document.createElement("IMG");
// 		soundIcon.setAttribute("src", sound.image); 
// 		soundIcon.setAttribute("id", sound.imgID); 

// 	}


// }




// // function scaleImage(sound) {

// // 	$(document).ready(function () {
// //         var small={width: "200px",height: "116px"};
// //         var large={width: "400px",height: "232px"};
// //         var count=1; 
// //         $(sound.imgID).css(small).on('click',function () { 
// //             $(sound.imgID).animate((count==1)?large:small);
// //             count = 1-count;
// //         });
// //     });






// //FUNCTONS

// //plays specificed sound
// function playSound(sound) { 
// rain.audio.play(); 
// displayImage(sound); 
// }

// function displayImage (sound)  {
// 	// console.log($(sound.zone).length);

// 	if($(rainCounter) == 1)
// 	{
// 		var rainIcon = document.createElement("IMG");
// 		soundIcon.setAttribute("src", sound.image); 
// 		soundIcon.setAttribute("id", sound.imgID); 

// 	}
// 	if ($(sound.zone).is(':empty')) { //adds image into zone if its empty. Else scales up image in zone
// 		var soundIcon = document.createElement("IMG");  
// 		// soundIcon.setAttribute("id", ound.image);     
// 		soundIcon.setAttribute("src", sound.image);    
// 		soundIcon.setAttribute("id", sound.imgID);     
// 		// soundIcon.setAttribute("width", "100%");     
// 	soundIcon.setAttribute("height", "100%");     
// 	soundIcon.setAttribute("alt", sound.alt);  
// 	soundIcon.setAttribute("currScale", 1);  
// 	// $(sound.zone).append(soundIcon); 
// 	// }
// 	else { //scale image up and down
// 		// scaleImage(sound);
// 		// let scale = 1;

// 		//scale up
// 		// while(scale<8) {
// 		// 	setTimeout(function(){
// 		// 		$(sound.zone).children('img')[0].style.transform = "scale(" + scale + ")";
// 		// 		scale+=0.1;
// 		// 	}, 1000);	
// 		// }
// 		let currScale = $(sound.zone).children('img')[0].getAttribute("currScale");
// 		let newScale = ($(sound.zone).children('img')[0].getAttribute("currScale")) * 1.1;
// 		$(sound.zone).children('img')[0].setAttribute("currScale", newScale);//update scale attribute
// 		$(sound.zone).children('img')[0].style.transform = "scale(" + newScale + ")";
		
// 	}

// }

// //adds sound to song array and adds icon to staff
// function addToSong(rain) {
// 	song.push(sound);

// 	//adds to staff
// 	var liObj = document.createElement("LI");
// 	var soundIcon = document.createElement("IMG");  
// 	soundIcon.setAttribute("src", sound.image);     
// 	// soundIcon.setAttribute("width", "100%");     
// 	soundIcon.setAttribute("height", "100%");     
// 	soundIcon.setAttribute("alt", sound.alt);  
// 	liObj.append(soundIcon);
// 	$("#notes").append(liObj); 
// }

// let delayBeforePlaying; //amount of time before each sound starts to play...will hold duration of prev sound in the sequence
// //iterates through song array playing each sound
// function playSong() {
// clearZones();
// for (let i =0; i<song.length; i++) {
//    if(!song[i-1]) { //this is the first sound in song so we want a delay of 0
//     setTimeout(function(){playSound(song[i])}, 0);
//     delayBeforePlaying = 0; // resets this variable each time the song starts
//    }
//    else {
//     delayBeforePlaying = delayBeforePlaying + song[i-1].duration; //updates the amount of time to delay before playing the next song..equal to the total length of all the previous sounds combined
//     setTimeout(function(){playSound(song[i])}, delayBeforePlaying);
//    }
// }
// }

// //undoes last sound added to sound
// function undoSoundAddition() {
//     song.pop();
//     $('li:last-child').remove();
//     // $("p:last-child")
//     // $("#notes").pop();
// }

// //clears out all the zone images before playing song
// function clearZones() {
// $(".soundIcon").empty();
// }

// //clears song array
// function clearSong() {
//     song.length = 0;
//     $("#notes").empty();
// }

// $('#infoButton').click (e => displayInfo());
// function displayInfo() {
// 	$("#infoButton").click(function() {
// 	    $("#infoBox").toggle();
// 	  });
// 	}