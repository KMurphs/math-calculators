const areNumbersAlmostEqual = (num1: number, num2: number, epsilon: number = Number.EPSILON) => num1 && num2 && Math.abs( num1 - num2 ) < epsilon;
const areNumericObjectsEqual = (obj1: {[key:string]:number}, obj2: {[key:string]:number}, epsilon: number = Number.EPSILON) => Object.keys(obj1).reduce((acc, key) => acc && areNumbersAlmostEqual(obj1[key], obj2[key], epsilon), true);


export {areNumbersAlmostEqual, areNumericObjectsEqual}