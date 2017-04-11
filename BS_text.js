$( document ).ready(function() {
    console.log( "ready!" );

var itemSelected = '';
$('.dropdown-menu li a').click( function(){
	var userSelection = $(this).text();
	console.log(userSelection);
	


});

}); // end of jquery