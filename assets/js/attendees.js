$(document).ready(function(){
	var allCountries = 'All countries';
	var fursuitersOnly = false;
	var sponsorOnly = false;
	var staffOnly = false;
	var currCountry = allCountries;

	function addFilters(){
		if($('#attendee-filters').length > 0){
			//countries
			var countries = [];
		    $('.attendee .country').each(function() {
		        countries.push($(this).attr('title'));
		    });
		    countries.sort();
		    countries = Array.from(new Set(countries));
		    var options = '<option value="All countries">' + allCountries + '</option>';
		    for (x in countries) {
		        options += '<option value="' + countries[x] + '">' + countries[x] + '</option>';
		    };
		    $('#attendee-filters').html('<select id="countrySorter" class="form-control">' + options + '</select>');
		    $('#countrySorter').on('change', function() {
		        $('.attendee').show();
		        currCountry = $(this).val();
		        filter();
		    });
		    // fursuiters
		    $('#attendee-filters').append(''
				+ '<input class="checkbox" type="checkbox" id="fursuiterOnly">'
				+ '&nbsp;'
				+ '<label for="fursuiterOnly">Fursuiters</label>'
		    );
		    $('#fursuiterOnly').on('change', function(){
		    	fursuitersOnly = $(this).is(':checked')
		    	filter();
		    });
		    //sponsor
		    $('#attendee-filters').append(''
				+ '<input class="checkbox" type="checkbox" id="sponsorOnly">'
				+ '&nbsp;'
				+ '<label for="sponsorOnly">Sponsor</label>'
		    );
		    $('#sponsorOnly').on('change', function(){
		    	sponsorOnly = $(this).is(':checked')
		    	filter();
		    });
		    //count init
		    $('#attendee-filters').append('<span class="filterTotal-wrapper"><span id="filterTotal"></span></span>');
		    $('#filterTotal').html($('.attendee').length);
		}
	}

	function filter(){
		$('.attendee').show();
		//country
		if (currCountry != allCountries) {
            $('.attendee .country:not([title="' + currCountry + '"])').parent().parent().hide();
        }
		//fursuiter
		if(fursuitersOnly){
			$('.attendee').not('.fursuiter').hide();
		}
		//sponsor
		if(sponsorOnly){
			$('.attendee').not('.sponsor').hide();
		}
		//count update
		$('#filterTotal').html($('.attendee:visible').length);
	}

	addFilters();

});
