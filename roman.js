function convertToRoman() {
  var number = document.getElementById("numberInput").value;
  var roman = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i < decimal.length; i++) {
    while (number >= decimal[i]) {
      roman += numeral[i];
      number -= decimal[i];
    }
  }

  document.getElementById("result").innerText = roman;
}