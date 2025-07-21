const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const charactersWithoutSymbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const charactersWithoutNumbers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const lettersOnly = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let firstPasswordEl = document.getElementById("first-pass-el");
let secondPasswordEl = document.getElementById("second-pass-el");
let password = [];
let password1 = "";
let password2 = "";
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let charNumber = document.getElementById("char-number");

charNumber.addEventListener("input", () => {
  if (charNumber.value !== "") {
    const val = parseInt(charNumber.value);
    if (val < 0) charNumber.value = 0;
    if (val > 32) charNumber.value = 32;
  }
});

function generateRandomPassword() {
  let randomPassword = [];
  if (charNumber.value <= 0) {
    if (symbols.checked && !numbers.checked) {
      for (let i = 0; i < charactersWithoutSymbols.length; i++) {
        let randomIndex = Math.floor(
          Math.random() * charactersWithoutSymbols.length,
        );

        randomPassword.push(charactersWithoutSymbols[randomIndex]);
      }
      for (let j = 0; j < 16; j++) {
        password1 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutSymbols.length)
          ];

        password2 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutSymbols.length)
          ];
      }
      password.push(password1, password2);
      return password;
    } else if (numbers.checked && !symbols.checked) {
      for (let i = 0; i < charactersWithoutNumbers.length; i++) {
        let randomIndex = Math.floor(
          Math.random() * charactersWithoutNumbers.length,
        );

        randomPassword.push(charactersWithoutNumbers[randomIndex]);
      }

      for (let j = 0; j < 16; j++) {
        password1 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutNumbers.length)
          ];

        password2 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutNumbers.length)
          ];
      }
      password.push(password1, password2);
      return password;
    } else if (symbols.checked && numbers.checked) {
      for (let i = 0; i < lettersOnly.length; i++) {
        let randomIndex = Math.floor(Math.random() * lettersOnly.length);

        randomPassword.push(lettersOnly[randomIndex]);
      }
      for (let j = 0; j < 16; j++) {
        password1 +=
          randomPassword[Math.floor(Math.random() * lettersOnly.length)];

        password2 +=
          randomPassword[Math.floor(Math.random() * lettersOnly.length)];
      }
      password.push(password1, password2);
      return password;
    } else {
      for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);

        randomPassword.push(characters[randomIndex]);
      }
      for (let j = 0; j < 16; j++) {
        password1 +=
          randomPassword[Math.floor(Math.random() * characters.length)];

        password2 +=
          randomPassword[Math.floor(Math.random() * characters.length)];
      }
      password.push(password1, password2);
      return password;
    }
  } else {
    if (symbols.checked && !numbers.checked) {
      for (let i = 0; i < charactersWithoutSymbols.length; i++) {
        let randomIndex = Math.floor(
          Math.random() * charactersWithoutSymbols.length,
        );

        randomPassword.push(charactersWithoutSymbols[randomIndex]);
      }
      for (let j = 0; j < charNumber.value; j++) {
        password1 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutSymbols.length)
          ];

        password2 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutSymbols.length)
          ];
      }
      password.push(password1, password2);
      return password;
    } else if (numbers.checked && !symbols.checked) {
      for (let i = 0; i < charactersWithoutNumbers.length; i++) {
        let randomIndex = Math.floor(
          Math.random() * charactersWithoutNumbers.length,
        );

        randomPassword.push(charactersWithoutNumbers[randomIndex]);
      }

      for (let j = 0; j < charNumber.value; j++) {
        password1 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutNumbers.length)
          ];

        password2 +=
          randomPassword[
            Math.floor(Math.random() * charactersWithoutNumbers.length)
          ];
      }
      password.push(password1, password2);
      return password;
    } else if (symbols.checked && numbers.checked) {
      for (let i = 0; i < lettersOnly.length; i++) {
        let randomIndex = Math.floor(Math.random() * lettersOnly.length);

        randomPassword.push(lettersOnly[randomIndex]);
      }
      for (let j = 0; j < charNumber.value; j++) {
        password1 +=
          randomPassword[Math.floor(Math.random() * lettersOnly.length)];

        password2 +=
          randomPassword[Math.floor(Math.random() * lettersOnly.length)];
      }
      password.push(password1, password2);
      return password;
    } else {
      for (let i = 0; i < characters.length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);

        randomPassword.push(characters[randomIndex]);
      }
      for (let j = 0; j < charNumber.value; j++) {
        password1 +=
          randomPassword[Math.floor(Math.random() * characters.length)];

        password2 +=
          randomPassword[Math.floor(Math.random() * characters.length)];
      }
      password.push(password1, password2);
      return password;
    }
  }
}

function generatePassword() {
  firstPasswordEl.textContent = generateRandomPassword()[0];
  secondPasswordEl.textContent = generateRandomPassword()[1];
  firstPasswordEl.innerHTML +=
    "<img class='copy' id='first-img' src='./images/test.png' alt='copy icon' onclick='copyToClipboardF()'/>";
  secondPasswordEl.innerHTML +=
    "<img class='copy' id='second-img' src='./images/test.png' onclick='copyToClipboardS()' alt='copy icon' />";
  password1 = "";
  password2 = "";
  password = [];
}

function copyToClipboardF() {
  let firstImg = document.getElementById("first-img");
  console.log(firstPasswordEl.textContent);
  firstImg.src = "./images/check.png";
  navigator.clipboard.writeText(firstPasswordEl.textContent);
}
function copyToClipboardS() {
  let secondImg = document.getElementById("second-img");
  console.log(secondPasswordEl.textContent);
  secondImg.src = "./images/check.png";
  navigator.clipboard.writeText(secondPasswordEl.textContent);
}
