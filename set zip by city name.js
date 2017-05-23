

(function( $ ) {
	var city_zip_json = (function () {
		var city_zip_json = null;
		var my_url = 'http://212.199.136.131/~meshekfrankorgan/wp-content/themes/Meshek-Frank/city-zip.json';
		$.ajax({
			'async': false,
			'global': false,
			'url': my_url,
			'dataType': "json",
			'success': function (data) {
				city_zip_json = data;
			}
		});
		return city_zip_json;
	})(); 	
	
	$('.chosen-select').on('change', function(e) {
            for (var i = 0; i < city_zip_json.length; i++) {
				if ( city_zip_json[i].city == $(this).val() ){
					$('*[data-label="מיקוד"]').val(city_zip_json[i].zip);
				}
            }		
		
		//$('*[data-label="מיקוד"]').val($(this).val());			 
	});	
})( jQuery );

