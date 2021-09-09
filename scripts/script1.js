function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// articles destination elements
// to open the JSON file and get the data
var request = new XMLHttpRequest();
request.open("GET", "scripts/articles.json", false);
request.send(null);
var articles_JSON_object = JSON.parse(request.responseText);

// HTML DOM manipulator
var request = new XMLHttpRequest();
request.open("GET", "scripts/articles.json", false);
request.send(null);
var articles_JSON_object = JSON.parse(request.responseText);

function articlesCreator(i) {
  // create each div for the destination with class "row articles"
  var divmain = document.createElement("div");
  divmain.className = "row articles-row " + i;
  // inside it create div with class "col-lg-3 articles-img"
  var divimg = document.createElement("div");
  divimg.className = "col-lg-4 articles-img";
  // inside it create insert image with src from JSON
  var imgmain = document.createElement("img");
  imgmain.src = articles_JSON_object.destinations[i].destinationImg;
  divimg.appendChild(imgmain);
  divmain.appendChild(divimg);

  // inside it create div with class "col-lg-8 articles-text"
  var divtext = document.createElement("div");
  divtext.className = "col-lg-8 articles-text";
  // inside it create create and insert h3 and p and button with src from JSON
  var h3main = document.createElement("h3");
  h3main.innerText = articles_JSON_object.destinations[i].destinationName;
  var pmain = document.createElement("p");
  pmain.innerText = articles_JSON_object.destinations[i].destinationData;
  var btnmain = document.createElement("button");
  btnmain.className = "btn btn-danger articles-text-btn";
  btnmain.innerText = "READ MORE";
  btnmain.setAttribute(
    "onclick",
    articles_JSON_object.destinations[i].destinationBtn
  );

  divtext.appendChild(h3main);
  divtext.appendChild(pmain);
  divtext.appendChild(btnmain);

  // append the texts to the created div
  divmain.appendChild(divtext);

  // appends each div created to our articles-div
  var art = document.getElementById("articles-div");

  art.appendChild(divmain);
}

// el resto
for (var i = 0; i < articles_JSON_object.destinations.length; i++) {
  articlesCreator(i);
}

// lo podia poner como src del button sino, que iba a ser mucho mas sencillo
