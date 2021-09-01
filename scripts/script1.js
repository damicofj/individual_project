function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// articles destination elements

var request = new XMLHttpRequest();
request.open("GET", "scripts/articles.json", false);
request.send(null);
var articles_JSON_object = JSON.parse(request.responseText);

for (var i = 0; i < articles_JSON_object.destinations.length; i++) {
    console.log(articles_JSON_object.destinations[i].destinationName);
    console.log(articles_JSON_object.destinations[i].destinationImg);
    console.log(articles_JSON_object.destinations[i].destinationData);
}



