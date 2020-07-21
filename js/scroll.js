$(".scroll").on("click", function(e)
	/* $('[href*=#]').on('click', function(e) */
	{
		e.preventDefault();
		/* console.log('clicked'); */

		if ($($.attr(this, 'href')).length > 0) {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 400);
		}
		toggleMenuList();
		return false;
	});


$(".HomeScroll").on("click", function(e) {
	e.preventDefault();
	/* console.log('clicked'); */

	$('html, body').animate({
		scrollTop: 0
	}, 400);

	toggleMenuList();
	return false;
});


$(".logo").on("click", function(e) {
	e.preventDefault();
	/* console.log('clicked'); */

	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});



$(".toggleMenuBlog").on("click", function(e) {
	//e.preventDefault();
	toggleMenuList();
	//return false;
});
