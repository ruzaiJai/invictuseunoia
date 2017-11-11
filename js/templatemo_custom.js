/* Credit: http://www.templatemo.com */

$(document).ready(function(){

	//$('#notes_tabs li:first-child').tab('show');

	$('#notes .notes_buttons li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
});

function change_panels(new_index){
	var arrow_positions = [ 20, 110, 205 ];
	var new_top = arrow_positions[new_index] + 'px';

	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('#notes_tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.notes_buttons li').removeClass('active');
	$('.notes_buttons li:nth-child('+(new_index+1)+')').addClass('active');
}

var map = '';

function initialize() {
	var coord={lat: 2.2212, lng: 102.4523};	
   var imap = new google.maps.Map(document.getElementById('google_map'), {
          zoom: 14,
          center: coord
        });
    
	
	var marker = new google.maps.Marker({
          position: coord,
          map: imap,
          title: 'Hello World!'
        });
	
	}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
	
	
	
	



