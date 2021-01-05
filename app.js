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


 // About Section

 window.addEventListener("scroll", function(){
	const about = document.querySelector(".about");
	about.classList.toggle("paint", window.scrollY > 260);
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

// Scroll transitions

function scrollShow(){
	const contentBx = document.querySelector(".contentBx");
	const desert = document.querySelector(".desert");
	const title1= document.querySelector(".title1");
	const introPosition = contentBx.getBoundingClientRect().top;
	// console.log(introPosition)
	const screenPosition = window.innerHeight / 1.2;


	if(introPosition < screenPosition) {
		contentBx.classList.add("contentShow")
		desert.classList.add("desertShow")
		title1.classList.add("title1Show")
	}
}

function scrollShow2(){
	const title2 = document.querySelector(".title2");
	const subtitle1 = document.querySelector(".subtitle1");
	const introPosition2 = title2.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.2;

	if(introPosition2 < screenPosition) {
		title2.classList.add("title2Show")
		subtitle1.classList.add("subtitle1Show")
}
}


function scrollShow3(){
	const title3 = document.querySelector(".title3");
	const subtitle2 = document.querySelector(".subtitle2");
	const testimonialBx = document.querySelector(".testimonialBx");
	const testimonialBx2 = document.querySelector(".testimonialBx2");
	const introPosition3 = title3.getBoundingClientRect().top;
	const screenPosition = window.innerHeight / 1.2;

	if(introPosition3 < screenPosition) {
		title3.classList.add("title3Show")
		subtitle2.classList.add("subtitle2Show")
		testimonialBx.classList.add("testimonialBxShow")
		testimonialBx2.classList.add("testimonialBxShow")
}
}


// Form

window.addEventListener("DOMContentLoaded", function () {

  
	const form = document.getElementById("my-form");

	const status = document.getElementById("status");
  

  
	function success() {
	  form.reset();
	  status.classList.add("success");
	  status.innerHTML = "Submited, thanks!";
	}
  
	function error() {
	  status.classList.add("error");
	  status.innerHTML = "Oops! Something went wrong";
	}
  
	// handle the form submission event
  
	form.addEventListener("submit", function (ev) {
	  ev.preventDefault();
	  const data = new FormData(form);
	  ajax(form.method, form.action, data, success, error);
	});
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
	  if (xhr.readyState !== XMLHttpRequest.DONE) return;
	  if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
	  } else {
		error(xhr.status, xhr.response, xhr.responseType);
	  }
	};
	xhr.send(data);
  }
  



window.addEventListener("scroll", scrollShow)
window.addEventListener("scroll", scrollShow2)
window.addEventListener("scroll", scrollShow3)
