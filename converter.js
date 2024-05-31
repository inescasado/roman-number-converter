function arabicToRoman(arabic) {
    if (arabic < 1 || arabic > 3999) return "Invalid input";

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];

    let roman = '';
    for (const { value, numeral } of romanNumerals) {
        while (arabic >= value) {
            roman += numeral;
            arabic -= value;
        }
    }
    return roman;
}

function romanToArabic(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let arabic = 0;
    let previousValue = 0;

    for (const char of roman) {
        const value = romanNumerals[char];
        if (value > previousValue) {
            arabic += value - 2 * previousValue;
        } else {
            arabic += value;
        }
        previousValue = value;
    }

    return arabic;
}

function convertToRoman() {
    const inputNumber = document.getElementById('numberInput').value;
    const result = arabicToRoman(parseInt(inputNumber));
    document.getElementById('result').innerText = result;

    // Track the conversion event with Google Analytics
    gtag('event', 'conversion', {
        'event_category': 'Roman Conversion',
        'event_label': 'Convert to Roman',
        'value': inputNumber
    });
}

// Google Analytics code
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-ZEXDRZK8VY');
