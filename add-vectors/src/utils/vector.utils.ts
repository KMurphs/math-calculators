import type { TCartesianVector, TPolarVector } from "./vector.types";

const degreesToRadians = Math.PI / 180;
const degreesFromRadians = (radians: number): number => (radians / degreesToRadians);
const radiansFromDegrees = (degrees: number): number => (degrees * degreesToRadians);
const toCartesian = (polar: TPolarVector): TCartesianVector => ({ x: polar.radius * Math.cos(radiansFromDegrees(polar.degreeAngle)), y: polar.radius * Math.sin(radiansFromDegrees(polar.degreeAngle)) });
const toPolar = (v: TCartesianVector): TPolarVector => ({ radius: Math.sqrt(v.x*v.x + v.y*v.y), degreeAngle: degreesFromRadians(Math.atan2(v.y, v.x)) });


const addCartesianVectors = (v1: TCartesianVector, v2: TCartesianVector): TCartesianVector => ({x: v1.x + v2.x, y: v1.y + v2.y});
const scalarCartesianProduct = (scalar: number, v: TCartesianVector): TCartesianVector => ({x: scalar * v.x, y: scalar * v.y});

export { toCartesian, toPolar, addCartesianVectors, scalarCartesianProduct, degreesFromRadians, radiansFromDegrees }