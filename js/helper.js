/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() 
{
  $('button').click(function() 
  {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) 
{
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) 
{
  // your code goes here!
  var x1=event.pageX;
  var y1=event.pageY;
logClicks(x1,y1);

});










/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() 
{

  var locations;

  var mapOptions = 
  {
   disableDefaultUI: false,
   center:new google.maps.LatLng(work.jobs[1].locationLat,work.jobs[1].locationLong),
    zoom:5,
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);







//Create Marker with icon
createWorkMarker();
createHomeMarker();
createEducationMarker();


  
  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

 

}//End of initializeMap


//Set Info windowSS

var marker=[];
function setInfoWindow()
{
  var infowindow = new google.maps.InfoWindow({
  content:"Nikhil Residence3"
  });

infowindow.open(map,marker);
}


//Define markers icons etc

function createWorkMarker()
{
  console.log(work.jobs.length);

  for(i=0;i<work.jobs.length;i++)
  {
    var icon = 
  {
    url: "http://icon-park.com/imagefiles/location_map_pin_home_navy_blue.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };


  marker[i]=new google.maps.Marker(
{
  position:new google.maps.LatLng(work.jobs[i].locationLat,work.jobs[i].locationLong),
  icon:icon
  }); 

///Set infoWindow


/*
var infowindow = new google.maps.InfoWindow({
  content:work.jobs[i].employer;
  });

infowindow.open(map,marker); */

marker[i].setMap(map);

//setInfoWindow(i);


  }


//set info Window
for(i=0;i<work.jobs.length;i++)
{
  var infowindow = new google.maps.InfoWindow({
  content:"Company : "+work.jobs[i].employer
  });

infowindow.open(map,marker[i]);
}

  
}//end of createWorkMarker

/*function setInfoWindow(j)
{
  console.log("hi from set Info window"+work.jobs[j].employer);
}*/



function createHomeMarker()
{
  //console.log(work.jobs.length);

  //for(i=0;i<work.jobs.length;i++)
  
    var icon = 
  {
    url: "http://www.clker.com/cliparts/y/p/H/C/E/V/green-home-icon-md.png", // url
    scaledSize: new google.maps.Size(70, 70), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };


var marker=new google.maps.Marker(
{
  //console.log(mbio.contcacts.locationLat);
  position:new google.maps.LatLng(mbio.contcacts.locationLat,mbio.contcacts.locationLong),
  icon:icon
  }); 

marker.setMap(map);


//set infoWindow

var infowindow = new google.maps.InfoWindow({
  content:"Home Address :Athidhi Homes , BTM "
  });

infowindow.open(map,marker);
  
  
}//end of createHomeMarker



function createEducationMarker()
{
  console.log("Total School = "+education.schools.length);

  for(i=0;i<education.schools.length;i++)
  {
console.log("Total School = "+education.schools.length);

    var icon = 
  
  {
    url: "https://cdn4.iconfinder.com/data/icons/maps-and-navigation-solid-icons-vol-1/72/22-512.png", // url
    scaledSize: new google.maps.Size(70, 70), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };


 marker[i]=new google.maps.Marker(
{
  //console.log(mbio.contcacts.locationLat);
  position:new google.maps.LatLng(education.schools[i].locationLat,education.schools[i].locationLong),
  icon:icon
  }); 

marker[i].setMap(map);

  }

// set info window for education
  for(i=0;i<education.schools.length;i++)
  {
    var infowindow = new google.maps.InfoWindow({
  content:education.schools[i].name
  });

infowindow.open(map,marker[i]);
  }


  
}//end of createEducationMarker






/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) 
{
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
