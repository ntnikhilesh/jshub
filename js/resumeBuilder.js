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











