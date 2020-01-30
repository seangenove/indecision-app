console.log("utils.js is running");

export const square = (x) => x * x

export const add = (a, b) => a + b;

const isSenior = (a, b) => a - b ;

export { square, add, subtract as default };