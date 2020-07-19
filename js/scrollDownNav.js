window.onload = function() {

	pos = window.scrollY;
	ticking = false;
	var mobile_nav = document.querySelector("#mobile_nav");
	var nav = document.querySelector("#nav");

	if (pos > 100) {
		mobile_nav.classList.add("scrollDownNav");
		nav.classList.add("scrollDownNav");
	}
	window.addEventListener("scroll", function(e) {
		pos = window.scrollY;
		if (pos > 100 && !ticking) {
			mobile_nav.classList.add("scrollDownNav");
			nav.classList.add("scrollDownNav");
			ticking = true;
		}
		if (pos < 100 && ticking) {
			mobile_nav.classList.remove("scrollDownNav");
			nav.classList.remove("scrollDownNav");
			ticking = false;
		}
	});

	//判断锚并滚动至位置
	var anchorId = window.location.hash; //HASH
	var id = anchorId.split("#")[1];
	//console.log(id);
	if (id) {
		$('html, body').animate(
		{
			scrollTop: $(anchorId).offset().top
		}, 400);
	}

}


