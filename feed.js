var name = [
  "Bubbles",
  "Buttercup",
  "Fluffy",
  "Bear", 
  "Flash",
  "Fawn",
  "Bolt",
  "Woody",
  "Milo" ]; 
  
var gender = ["female", "male"]; 

var age = [
  "3 weeks",
  "6 months",
  "2 years old",
  "3 years old",
  "4 years old",
  "6 years old", 
  "9 years old",
  "10 years old", 
  "12 years old"];

var breed = [
  "unknown",
  "mix",
  "Corgi",
  "Chihuahua", 
  "Husky",
  "Labrador", 
  "Pug", 
  "Labrador Retriever", 
  "Beagle"]; 

var neutered = ["neutered", "not neutered"] 

var personality = [ 
  "fun, energetic", 
  "friendly, happy",
  "calm, mellow", 
  "outgoing, friendly", 
  "loyal, confident", 
  "shy, quiet"
  "protective, alpha" 
  "playful, kid friendly"
  "cheeky, funny"]; 

var h = 0;
var i = 0;
var j= 0;
var k= 0; 

var randomGender = gender[Math.floor(Math.random() * gender.length)];
var randomNeutered = neutered[Math.floor(Math.random() * neutered.length)];

var generator = [
for (h = 0; h < name.length; h++;
     i+=1; i < age.length;
     j+=1; j < breed.length;
     k+=1; k < personality. length; ) { 
  
    text += "<li> Name: " + name[h] + "</li>" +  "<br>" 
            "<li>" randomGender "</li>" + "<br>"
            "<li> Age: " + age[i] + "</li>" + "<br>"
            "<li> Breed: " + breed[j] + "/li>" + "<br>"
            "<li>" + randomNeutered + "</li>" + "<br>"
            "<li> Personality: " + personality[k] + "</li>" + "<br>";
}   
];

console.log(generator); 
