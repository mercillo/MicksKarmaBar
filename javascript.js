 $(document).ready(function(){

  $(".contentContainer").css("min-height", $(window).height());
(function() { var s = document.createElement("script");
	s.async = true;
	s.onload = s.onreadystatechange = function(){
		getYelpWidget("micks-karma-bar-irvine","300","RED","y","y","3");
	};
		s.src='http://chrisawren.com/widgets/yelp/yelpv2.js' ;
		var x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s, x);})();
});