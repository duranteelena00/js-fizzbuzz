/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var display = document.getElementById("demo");
var num = 0;

listElement = "";
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    listElement += "<li>FizzBuzz</li>";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    listElement += "<li>Fizz</li>";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    listElement += "<li>Buzz</li>";
  } else {
    console.log(i);
    listElement += "<li>" + i + "</li>";
  }
}

display.innerHTML = listElement