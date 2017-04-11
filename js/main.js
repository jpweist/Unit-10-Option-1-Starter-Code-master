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
});

$('.btn').on('click' function(e){
	e.preventDefault();


	console.log("i was clicked");

});


}); // end of jquery
