/*$("#main").append("Nikhil"); */

/*var firstName="james";
var age=32;



console.log(firstName); */

/*

var awesomeThoughts="I am Nikhil and I am AWESOME!";

console.log(awesomeThoughts); */

/*var old_email="ntnikhilesh@gmail.com";
var new_email=old_email.replace("ntnikhilesh@gmail","nikhilesh.tripathi@cognitiveclouds");

console.log(old_email);
console.log(new_email); */

/*var awesomeThoughts="I am Nikhil and I am AWESOME!";
var funThought=awesomeThoughts.replace("AWESOME","FUN");

console.log(funThought);

$("#main").append(funThought); */

/*var formattedName=HTMLheaderName.replace("%data%","Nikhil");
$("#main").append(formattedName); */

/*var formattedName=HTMLheaderName.replace("%data%","Nikhil");
var formattedRole=HTMLheaderName.replace("%data%","Frontend Developer");

$("#header").append(formattedName+"<br/>");
$("#header").append(formattedRole); */



/*var s = "audacity";

var udacityizer = function(s) {  

	s=s.slice(2,9);
	s="U"+s;

    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));


*/




/*
var myArray=[1,2];
console.log(myArray.length);

*/


//Increament last no of the array

/*
var id=[101,102];
var arLength=(id.length);
var last_id=(id[arLength-1]);
var updated_last_id=last_id+1;
id.pop();
//console.log(last_id);
//console.log(updated_last_id);
id.push(updated_last_id);

console.log(id);
  
  */


  //Increase array last item value by 1 

  /* var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var id=_array;
    var arLength=(id.length);
var last_id=(id[arLength-1]);
var updated_last_id=last_id+1;
id.pop();
//console.log(last_id);
//console.log(updated_last_id);
id.push(updated_last_id);
    //var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    // Don't delete this line!
    return id;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/



//If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized? Assume there's a space between the names. For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". Your answer should be a single string saved to the variable called finalName.
/*

var name="viRat KohLi";
var mname=name;
var space_index=name.indexOf(' ');
var last_name=mname.slice(space_index+1,name.length);
last_name=last_name.toLocaleUpperCase();
var firstChar=name.charAt(0).toUpperCase();
var fName=name.slice(1,space_index+1);
fName=fName.toLocaleLowerCase();
var finalName=firstChar+fName+last_name;
console.log(finalName);

*/

//Above exp

/*
var name1 = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    
    // Your code goes here!
    var mname=oldName;
var space_index=mname.indexOf(' ');
var last_name=mname.slice(space_index+1,mname.length);
last_name=last_name.toLocaleUpperCase();
var firstChar=finalName.charAt(0).toUpperCase();
var fName=finalName.slice(1,space_index+1);
fName=fName.toLocaleLowerCase();
finalName=firstChar+fName+last_name;
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name1));

*/

/*


var bio=
{
	name:"Nikhil",
	role:"Frontend Developer",
	contcact_info:"+91 9453363771",
	pic_url:"https://mapta.gs/map_image/image2016-11-10-05-33-0958240695c00164.51374152.png",
	welcome_msg:"Want to become tech bird",
	skills:"C , Java , JavaScript"

};

*/

/*

//Dot and Bracket notaion

var work={

};

work.current_job_position="Frontend Developer";
work.employer="Cognitiveclouds";
work.years_worked="Just got entry";
work.city="Bengaluru";

var formattedworkTile=HTMLworkTitle.replace("%data%",work.current_job_position);
$("#header").append(formattedworkTile);
/*
var formattedEmployer=HTMLworkEmployer.replace("%data%",work.employer);
$("#header").append(formattedEmployer);

var formattedwork_start=HTMLworkStart.replace("%data%",work.years_worked);
$("#header").append(formattedwork_start);

var formattedcity=HTMLworkLocation.replace("%data%",work.city);
$("#header").append(formattedcity);*/
/*
console.log(formattedworkTile);
var education={

};

education["last_school"]="UNITED Allhabad";
education["attend_year"]="2012-2015";
education["school_city"]="Allahabad";

var formattedschoolName=HTMLschoolName.replace("%data%",education["last_school"]);
$("#header").append(formattedschoolName);
/*
var formattedschoolDates=HTMLschoolDates.replace("%data%",education["attend_year"]);
$("#education").append(formattedschoolDates);

var formattedschoolLocation=HTMLschoolLocation.replace("%data%",education["school_city"]);
$("#education").append(formattedschoolLocation); 


console.log(formattedschoolName); */




//Validate JSON
/*
var education={
    "schools":[
    {
    "name":"UNITED",
    "city":"Allahabad",
    "degree":"B.Tech",
    "major":"CSE"
    },
    {
    "name":"RRCITM",
    "city":"Aligarh",
    "degree":"Diploma",
    "major":"IT"
    }
    ]
}

*/


//work object

var work={
    "jobs":[
    {
        "employer":"Maptags",
        "title":"Android Developer",
        "location":"Bengaluru",
        "dates":"Feb 2016 to Jan 2017",
        "description":"Was responsible for app testing, code comenting, UI design etc"
    },
    {
        "employer":"Cognitiveclouds",
        "title":"Frontend Developer",
        "location":"Bengaluru",
        "dates":"Feb 2017 to Future",
        "description":"Learning JavaScript. Learning basics and JSON, DOM etc. Trying to crack Udacity JavaScript Course. Solving quiz and teting lot of basic things."
    }
    ]
}


var mprojects={
    "projects":[
    {
        "title":"Maptags app",
        "dates":"Feb 2016 to Jan 2017",
        "description":"Maptags is a smart address revolution Which convert long address into smart links Like my address is www.mapta.gs/nikhilesh  Maptags app helps to create Maptags",
        "images":""
    }
    ]
}


//bio object is on top

var mbio={
    "name":"Nikhil",
    "role":"Frontend Developer",
    "welcome_msg":"Want to become tech bird",
    "biopic":"https://mapta.gs/map_image/image2016-11-10-05-33-0958240695c00164.51374152.png",
    
    "contcacts":{
        "mobile":"+91 9453363771",
        "email":"nikhilesh.tripathi@cognitiveclouds.com",
        "github":"nikhil636",
        "location":"Bengaluru"

    },
    
    "skills":["C ", "Java" , "JavaScript"]

}






//Appending bio data

//$("#header").append(bio.name);
var formattedName=HTMLheaderName.replace("%data%",mbio.name);
$("#header").append(formattedName);

var formattedRole=HTMLheaderRole.replace("%data%",mbio.role);
$("#header").append(formattedRole);

var formattedMobile=HTMLmobile.replace("%data%",mbio.contcacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail=HTMLemail.replace("%data%",mbio.contcacts.email);
$("#header").append(formattedEmail);

var formattedGithub=HTMLgithub.replace("%data%",mbio.contcacts.github);
$("#header").append(formattedGithub);

var formattedLocation=HTMLlocation.replace("%data%",mbio.contcacts.location);
$("#header").append(formattedLocation);

var formattedbioPic=HTMLbioPic.replace("%data%",mbio.biopic);
$("#header").append(formattedbioPic);

var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%",mbio.welcome_msg);
$("#header").append(formattedwelcomeMsg);

//if statement quiz
var formattedSkills;
if(mbio.skills.length>0)
{
    $("#header").append(HTMLskillsStart);
    for(i=0;i<mbio.skills.length;i++)
    {
    
    formattedSkills=HTMLskills.replace("%data%",mbio.skills[i]);
    $("#skills").append(formattedSkills);

    }/*

    ormattedSkills=HTMLskills.replace("%data%",mbio.skills[0]);
    $("#skills").append(formattedSkills);

    ormattedSkills=HTMLskills.replace("%data%",mbio.skills[0]);
    $("#skills").append(formattedSkills);

    ormattedSkills=HTMLskills.replace("%data%",mbio.skills[0]);
    $("#skills").append(formattedSkills); 
    console.log("We have skills");  */
}
//var formattedskills=HTMLskills.replace("%data%",mbio.skills);
//$("#header").append(formattedskills);

console.log(mbio.role);










// education object


var education={
    "schools":[
    {
        "name":"UNITED",
        "location":"Allahabad",
        "degree_dates":"2012-2015",
        "url":"",
        "majors":["CSE"]
    }
    ],

    "onlineCourses":[
    {
        "title":"JAVA Course",
        "school":"UNITED",
        "dates":"May 2014-June 2014 and May 2015-June 2015",
        "url":""
    }
    ]
}

/*

// Protecting resume

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!

newHTML=newHTML.replace(/</g,"");
newHTML=newHTML.replace(/>/g,"");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

*/

/*

//Dot notation vs Bracket Notation 

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
//console.log(weirdObject.8property);
console.log(weirdObject["8property"]);


// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;

*/



//for-in loop quiz

for(joblist in work.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[joblist].employer)
    var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[joblist].title);
    var formattedDates=HTMLworkDates.replace("%data%",work.jobs[joblist].dates);
    var formattedDesc=HTMLworkDescription.replace("%data%",work.jobs[joblist].description);
    var formattedEmployerTitle=formattedWorkEmployer+formattedTitle;
    console.log(formattedEmployerTitle);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDesc);
    
    //$("#header").append(formattedWorkEmployer);
}