define(['jquery'],function ($) {
	var methods = {
		display: function(txt) {
			$('#output').html(txt);
		},
		log: function(msg) {
			console.log(msg);
		}
	};

	return methods;
});