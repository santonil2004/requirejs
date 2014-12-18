requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'lib/jquery',
	}
});

requirejs(['app/main']);