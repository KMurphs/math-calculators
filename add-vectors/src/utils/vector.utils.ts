import type { TCartesianVector, TPolarVector } from "./vector.types";

const degreesToRadians = Math.PI / 180;
const degreesFromRadians = (radians: number): number => (radians / degreesToRadians);
const radiansFromDegrees = (degrees: number): number => (degrees * degreesToRadians);


const getModulus = (v: TCartesianVector | TPolarVector, isInPolarForm: boolean) => isInPolarForm ? (v as TPolarVector).radius : Math.sqrt(Math.pow((v as TCartesianVector).x, 2) + Math.pow((v as TCartesianVector).y, 2));
const toUnitVector = (v: TCartesianVector | TPolarVector, isInPolarForm: boolean) => (isInPolarForm ? { radius: 1, degreeAngle: (v as TPolarVector).degreeAngle } : {x: (v as TCartesianVector).x / getModulus(v, isInPolarForm), y: (v as TCartesianVector).y / getModulus(v, isInPolarForm)})


const toCartesian = (polar: TPolarVector): TCartesianVector => ({ x: polar.radius * Math.cos(radiansFromDegrees(polar.degreeAngle)), y: polar.radius * Math.sin(radiansFromDegrees(polar.degreeAngle)) });
const toPolar = (v: TCartesianVector): TPolarVector => ({ radius: getModulus(v, false), degreeAngle: degreesFromRadians(Math.atan2(v.y, v.x)) });


const addCartesianVectors = (v1: TCartesianVector, v2: TCartesianVector): TCartesianVector => ({x: v1.x + v2.x, y: v1.y + v2.y});
const scalarCartesianProduct = (scalar: number, v: TCartesianVector): TCartesianVector => ({x: scalar * v.x, y: scalar * v.y});

export { toCartesian, toPolar, addCartesianVectors, scalarCartesianProduct, degreesFromRadians, radiansFromDegrees, toUnitVector }