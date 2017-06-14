$(document).ready(function(){
	$('*[verlang="vi"]').hide();
	function helloWorld(){
		$("#typed").typed({
			strings: ["Hi!","I'm Cao The Toan.", "I'm a developer.", "I'd like robotic.",   "Nice to meet you!"],
			cursorChar: " &#9749;",
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 4500);
		    }
		});
	}
	helloWorld();
});
