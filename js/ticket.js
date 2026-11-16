var ADULT_PRICE = 25;
var HALF_PRICE = 11.25;
var AUDIO_PRICE = 5;

var calcButton = document.getElementById("calcButton");
var totalResult = document.getElementById("totalResult");
var breakdown = document.getElementById("breakdown");

function readNumber(id) {
  var value = parseInt(document.getElementById(id).value);
  if (isNaN(value) || value < 0) {
    value = 0;
  }
  return value;
}

function calculateTotal() {
  var adults = readNumber("adults");
  var half = readNumber("half");
  var audio = readNumber("audio");

  var total = adults * ADULT_PRICE + half * HALF_PRICE + audio * AUDIO_PRICE;

  totalResult.textContent = "EUR " + total.toFixed(2);
  breakdown.textContent = adults + " adult(s), " + half + " card holder(s), " + audio + " audio guide(s)";
}

calcButton.addEventListener("click", calculateTotal);
