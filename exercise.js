// Multiplication table of a given integer
const number = 9

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// check wheater a string is a palindrome or not
const string = 'madam';
let isPalindrome = true;

for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome ? `${string} adalah palindrom.` : `${string} bukan palindrom.`);

// convert centimeter to kilometer
const centimeter = 100000;
let kilometer = 0;

for (let i = centimeter; i >= 1000; i -= 1000) {
    kilometer++;
}
console.log(`${centimeter} cm sama dengan ${kilometer} km`);

// reverse a string
const string1 = "hello";
let reversedString1 = "";

for (let i = string1.length - 1; i >= 0; i--) {
    reversedString1 += string1[i];
}
console.log(reversedString1);

// format number idr
const number2 = 1000;
const formattedNumber = `Rp. ${number2.toLocaleString('id-ID')},00`;

console.log(formattedNumber);

// remove the first occurance of a given search string from a string
 let string3 = "Hello world"
 const searchString = "ell"

 string3 = string3.replace(searchString, '');

 console.log(string3)

 // find the largest of two given integer
const num1 = 42;
const num2 = 27;
let largestNumber;

if (num1 > num2) {
    largestNumber = num1;
} else {
    largestNumber = num2;
}

console.log(`Bilangan terbesar adalah: ${largestNumber}`);

// sort three number
let nom1 = 42;
let nom2 = 27;
let nom3 = 18;

if (nom1 > nom2) {
    let temp = nom1;
    nom1 = nom2;
    nom2 = temp;
}

if (nom2 > nom3) {
    let temp = nom2;
    nom2 = nom3;
    nom3 = temp;
}

if (nom1 > nom2) {
    let temp = nom1;
    nom1 = nom2;
    nom2 = temp;
}

console.log(`bilang terkecil ke terbesar adalah = ${nom1}, ${nom2}, ${nom3}`);

// swap the case of each character from string

const string5 = 'The QuiCk BrOwN Fox';
let swappedString = '';

for (let i = 0; i < string5.length; i++) {
    const char = string5[i];
    if (char === char.toUpperCase()) {
        swappedString += char.toLowerCase();
    } else {
        swappedString += char.toUpperCase();
    }
}

console.log(swappedString);

// capitalize 

let word7 = "hello world";
let result7 = "";

for (let i = 0; i < word7.length; i++) {
    if (i === 0) {
        result7 += word7[i].toUpperCase();

    } else if (word7[i - 1] === " ") {
        result7 += word7[i].toUpperCase();
        
    } else {
        result7 += word7[i];
    }
}
console.log(result7);
