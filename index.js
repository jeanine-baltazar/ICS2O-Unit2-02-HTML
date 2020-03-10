// JavaScript File
//The function below gets an element with the id "tectchange" and changes the text
function textchange () {
  document.getElementById("textchange").innerHTML = "Javascript is cool!";
}
//The function below changes the image of yogurt to an image of a pink drink
function changeimg () {
  document.getElementById("changeimg").src = "./images/drink.jpg";
}
//The function below changes the background color of the webpage to another shade of pink
function changeColor(color) {
  document.body.style.backgroundColor = "pink";
}
//The function below makes the hidden content appear from the id "textappear"
function textappear () {
  document.getElementById('textappear').style.display='block';
}
//The function below makes the text disappear from the id "textdisapear"
function textdisapear () {
  document.getElementById('textdisapear').style.display='none';
}