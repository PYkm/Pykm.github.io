
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
		return false;
	});
