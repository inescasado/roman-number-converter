import { test } from 'qunit';

test("Arabic to Roman Conversion", function (assert) {
    assert.equal(arabicToRoman(1), "I", "Converts 1 to 'I'");
    assert.equal(arabicToRoman(5), "V", "Converts 5 to 'V'");
    assert.equal(arabicToRoman(3999), "MMMCMXCIX", "Converts 3999 to 'MMMCMXCIX'");
    assert.equal(arabicToRoman(4000), "Invalid number", "Invalid input returns 'Invalid number'");
    // Add more test cases as needed
});

test("Roman to Arabic Conversion", function (assert) {
    assert.equal(romanToArabic("I"), 1, "Converts 'I' to 1");
    assert.equal(romanToArabic("V"), 5, "Converts 'V' to 5");
    assert.equal(romanToArabic("MMMCMXCIX"), 3999, "Converts 'MMMCMXCIX' to 3999");
    // Add more test cases as needed
});