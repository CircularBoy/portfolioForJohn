$(window).load( function() {

	function resizeGallery() {
		var width = $('.wrapper .images').width()
		var height = (795*width)/1200
		console.log(width)
		$('.wrapper .images').height(height)
	};

	resizeGallery()

	$(window).resize( function() {

		resizeGallery()

	});
});




