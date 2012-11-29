$(document).ready(function(){
	$('.fullscreen').click(function(){
//		$('#copy p').addClass('purple');
		window.open('gallery.html', '_self');
		return false;
		})
		
	$('#close').click(function(){
		window.open('article.html', '_self');
		return false;
		})

	$('#galinfo').mouseenter(
		function(){$(this).addClass("move");
		})

	$('#galinfo').mouseleave(
		function(){$(this).removeClass("move");
		})

		
})


