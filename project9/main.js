const btnSwitch= document.querySelector(".switch-btn");
const video= document.querySelector(".video-container");

btnSwitch.addEventListener("click",function(){
	if(!btnSwitch.classList.contains('slide')){
		btnSwitch.classList.add("slide");
		video.pause();
	}
	else{
		btnSwitch.classList.remove('slide');
		video.play();
	}
})
// preloader 
const preloader = document.querySelector(".preloader");
	window.addEventListener('load', function(){
		preloader.classList.add("hide-preloader");
})