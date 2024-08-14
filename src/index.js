import "./style.css";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, shiftFactor) {
  let cipheredStr = "";
  let regex = /^[a-zA-Z]+$/;

  for (let i = 0; i < str.length; i++) {
    let code = str.charAt(i).charCodeAt();
    let letter = str.charAt(i);

    if (regex.test(letter)) {
      if (code <= 90) {
        code =
          code + shiftFactor > 90
            ? code + shiftFactor - 26
            : code + shiftFactor;
      } else {
        code =
          code + shiftFactor > 122
            ? code + shiftFactor - 26
            : code + shiftFactor;
      }
      letter = String.fromCharCode(code);
    }

    cipheredStr += letter;
  }

  return cipheredStr;
}

function analyzeArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const avg = +(arr.reduce((a, b) => a + b) / length).toFixed(2);

  return { average: avg, min: min, max: max, length: length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
