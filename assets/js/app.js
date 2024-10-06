$(document).ready(function() {

	var atmovideo = document.getElementById('atmovideo');
	if(atmovideo !== null){
		if ($(window).width() > 1200) {
			atmovideo.innerHTML = ("<source type='video/mp4' src='" + atmovideo.getAttribute('data-src') + "' />");
		} 
	}

});