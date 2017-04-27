// https://www.npmjs.com/package/gulp-include




$(function() {
	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).toggleClass('collapse');
	})
});