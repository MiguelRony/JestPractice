import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./practice";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverseString", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("calculator", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(6, 2)).toBe(3);
});

test("caesarCipher", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("analyzeArray", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});