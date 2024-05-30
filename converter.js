function arabicToRoman(arabic) {
    if (arabic < 1 || arabic > 3999) return "Invalid number"; // Valid range for conversion
    var roman = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for (var i = 0; i < decimal.length; i++) {
        while (arabic >= decimal[i]) {
            roman += numeral[i];
            arabic -= decimal[i];
        }
    }
    return roman;
}

function romanToArabic(roman) {
    var romanNumeral = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var arabic = 0;
    for (var i = 0; i < roman.length; i++) {
        var current = romanNumeral[roman[i]];
        var next = romanNumeral[roman[i + 1]];
        if (current < next) {
            arabic -= current;
        } else {
            arabic += current;
        }
    }
    return arabic;
}

function convertToRoman() {
    var inputNumber = parseInt(document.getElementById('numberInput').value);
    var result = arabicToRoman(inputNumber);
    document.getElementById('result').innerText = result;
}