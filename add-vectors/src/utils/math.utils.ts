const areNumbersAlmostEqual = (num1: number, num2: number, epsilon: number = Number.EPSILON) => Math.abs( (num1 || 0) - (num2 || 0) ) < epsilon;
const areNumericObjectsEqual = (obj1: {[key:string]:number}, obj2: {[key:string]:number}, epsilon: number = Number.EPSILON) => Object.keys(obj1).reduce((acc, key) => acc && areNumbersAlmostEqual(obj1[key], obj2[key], epsilon), true);


export {areNumbersAlmostEqual, areNumericObjectsEqual}