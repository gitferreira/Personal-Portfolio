//Logo Animation

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';

$(function() {
	var text = $(".textLogo");
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
  
	  if (scroll >= 10) {
		text.removeClass("hidden");
	  } else {
		text.addClass("hidden");
	  }
	});
  });

//	Nav Bar

window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

//  Skills Bar


window.addEventListener("scroll",function(){
  if(window.scrollY > 1400 ){
	
	let progressBars = document.querySelectorAll(".progress-bar");
	let values = [
		"95%",
		"75%",
		"87%",
		"78%",
		"80%",
		"95%",
		"90%",
		"85%",
		"75%",
		"65%",

	];
	 
	 return (progressBars.forEach((progress, index) => {
		progress.style.width = values[index]
		console.log("hey")
	}) )
	
  }

})




//Menu

function toggleMenu(){
	const menuToggle = document.querySelector(".toggle");
	const menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active")
	menu.classList.toggle("active")
}

