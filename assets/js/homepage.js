$(document).ready(function(){
	$('*[verlang="vi"]').hide();
	function helloWorld(){
		$("#typed").typed({
			strings: ["Hi!","{{site.about.english}}", "I'm a developer.", "I'd like robotic.",   "Nice to meet you!"],
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
