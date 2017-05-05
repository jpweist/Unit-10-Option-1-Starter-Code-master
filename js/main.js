$( document ).ready(function() {
    console.log( "ready!" );


  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyB7TGeLbitt_KJoFaGvoOZZDoZ4QcHklNg",
    authDomain: "reservation-site-7c2d6.firebaseapp.com",
    databaseURL: "https://reservation-site-7c2d6.firebaseio.com",
    projectId: "reservation-site-7c2d6",
    storageBucket: "reservation-site-7c2d6.appspot.com",
    messagingSenderId: "510734839392"
  };
  
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  var uList = $('list');

  // var reservationData = { // before handlebars
  //   name: "",
  //   day: ""
  // };

  var reservationData = {
        name: "",
        day: ""

      };



// var data for firebase for name and day for Handlebars


// user name
$( ".reservation-name" ).keyup(function(e) {
    e.preventDefault();
    reservationData = $( this ).val();
    console.log(reservationData);
  });

// get day

$(".reservation-day li a").click( function(e){
    e.preventDefault();
    reservationData = $( this ).text();
    console.log("day " + reservationData);

});


$('.reservation-button').click( function(e) {
    e.preventDefault();

    var reservationsReference = database.ref('reservations');
    reservationsReference.push(reservationData);
});

var getReservations = function(){

 };
// test drop down button ugh


// Get elements
  var preObject = document.getElementById('object');

// Create references
  var dbRefObject = firebase.database().ref().child('object');
  var dbRefList = dbRefObject.child('reservations');

  // // Sync object changes
  // dbRefObject.on('value', snap => {

  // });


  // dbRefList.on('child_added', snap => {

  //   var li = document.createElement('li');
  //   li.innerText = snap.val();
  //   uList.appendChildli();

  // });
  
// firebase.database.reservations


  var reservationData = $('#reservations-template').html();
  var template = Handlebars.compile(reservationData);

  $('#reservations-template').html(reservationData);

//map


  
// end map

}); // end of jquery
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });
var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
} 







