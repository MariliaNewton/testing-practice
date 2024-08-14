import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize word chair to Chair", () => {
  expect(capitalize("chair")).toBe("Chair");
});

test("reverse string Jordan to nadroJ", () => {
  expect(reverseString("Jordan")).toBe("nadroJ");
});

test("calculator add 3 + 5 equals 8", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("calculator add 3 - 5 equals -2", () => {
  expect(calculator.subtract(3, 5)).toBe(-2);
});

test("calculator add 3 / 5 equals 0.6", () => {
  expect(calculator.divide(3, 5)).toBe(0.6);
});

test("calculator add 3 * 5 equals 15", () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test("caeserCipher xyz sf-3 returns abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caeserCipher HeLLo sf-3 returns abc", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caeserCipher Hello,World! sf-3 returns abc", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array [1,8,3,4,2,6] return object min:1 max:8 length:6 avg: 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
