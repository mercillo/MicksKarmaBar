 $(document).ready(function(){
  $("#sticker").sticky({
  	topSpacing:0,
  	zIndex:1

  });
  $('#sticker').on('sticky-start', function() {
    	console.log("Started");
 
  	$('#sticker').addClass("blacknav")});


  $('#sticker').on('sticky-end', function() { 
  		$('#sticker').removeClass("blacknav");
  	console.log("Ended"); });

  $(".contentContainer").css("min-height", $(window).height());

    var map;
    function initMap(){
     map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: 33.6842302, lng: -117.8537628},
       
        zoom: 15
        });
    }

    initMap();
});