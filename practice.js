

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const reverseString = (str) => {
  return str.split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

export const caesarCipher = (str, shift) => {
    return str
        .split("")
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }
            }
            return char;
        })
        .join("");
}

export const analyzeArray = (array) => {
    return {
        average: array.reduce( (prev, curr) => prev + curr) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}