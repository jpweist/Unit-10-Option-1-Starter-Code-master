$( document ).ready(function() {
    console.log( "ready!" );

var database = firebase.database(); // firebase 

var reservationData = {
	name: "",
	day: ""
};

$('.dropdown-menu li a').click( function(e){
		e.preventDefault();
		reservationData.day = $(this).text();
		console.log(reservationData.day);

	$('.reservation-button').on('click', function(e){
		e.preventDefault();
		console.log(reservationData.name + " your reservation for " + reservationData.day + " is set.");

	});

	reservationData.name = $('.reservation-name').val()
});






}); // end of jquery
