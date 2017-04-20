$( document ).ready(function() {
    console.log( "ready!" );


  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyB7TGeLbitt_KJoFaGvoOZZDoZ4QcHklNg",
    authDomain: "reservation-site-7c2d6.firebaseapp.com",
    databaseURL: "https://reservation-site-7c2d6.firebaseio.com",
    storageBucket: "reservation-site-7c2d6.appspot.com"
  };
  
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  var reservationData = {
    name: "",
    day: ""
  };

// user name
$( ".reservation-name" ).keyup(function(e) {
    e.preventDefault();
    reservationData.name = $( this ).val();
    console.log(reservationData.name);
  });

// get day

$(".reservation-day li a").click( function(e){
    e.preventDefault();
    reservationData.day = $( this ).text();
    console.log("day " + reservationData.day);

});


$('.reservation-button').click( function(e) {
    e.preventDefault();
    console.log(reservationData.name + " your reservation is set for " + reservationData.day + ". We look forward to seeing you.")
});
// test drop down button ugh


// picked up from tester
// Get elements
  const preObject = document.getElementById('object');

// Create references
  const dbRefObject = firebase.database().ref().child('object');

  // Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));

// end from tester


}); // end of jquery
