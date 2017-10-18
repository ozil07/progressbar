"use strict";

var bodyHeight = document.body.scrollHeight - document.documentElement.clientHeight,
		progressBar = document.querySelector('.progress__bar');


document.body.onscroll = function(e) {
	var scrollArea = document.documentElement.scrollTop;
	var sizeBg = scrollArea * 100 / bodyHeight;
	progressBar.style.backgroundSize = sizeBg + '%' + ' 100%';
}




		