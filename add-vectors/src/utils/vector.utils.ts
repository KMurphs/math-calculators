import type { TCartesianVector, TPolarVector } from "./vector.types";

const degreesToRadians = Math.PI / 180;
/**
 * Convert from degrees to radians
 * @date 2021-06-13
 * @param {number} radians:number
 * @returns {number} degrees
 */
const degreesFromRadians = (radians: number): number => (radians / degreesToRadians);
/**
 * Convert from radians to degrees
 * @date 2021-06-13
 * @param {number} degrees:number
 * @returns {number} radians
 */
const radiansFromDegrees = (degrees: number): number => (degrees * degreesToRadians);






/**
 * Computes modulus of 2D vector 
 * @date 2021-06-13
 * @param {TCartesianVector|TPolarVector} v
 * @param {boolean} isInPolarForm:boolean
 * @returns {number}
 */
const getModulus = (v: TCartesianVector | TPolarVector, isInPolarForm: boolean) => isInPolarForm ? (v as TPolarVector).radius : Math.sqrt(Math.pow((v as TCartesianVector).x, 2) + Math.pow((v as TCartesianVector).y, 2));
/**
 * Divides a vector by its modulus to get a new unit vector parallel to the original one
 * @date 2021-06-13
 * @param {TCartesianVector|TPolarVector} v:
 * @param {boolean} isInPolarForm:boolean
 * @returns {TCartesianVector|TPolarVectorny}
 */
const toUnitVector = (v: TCartesianVector | TPolarVector, isInPolarForm: boolean) => (isInPolarForm ? { radius: 1, degreeAngle: (v as TPolarVector).degreeAngle } : {x: (v as TCartesianVector).x / getModulus(v, isInPolarForm), y: (v as TCartesianVector).y / getModulus(v, isInPolarForm)})





/**
 * Convert between polar and cartesian representations of a vector
 * @date 2021-06-13
 * @param {TPolarVector} polar:
 * @returns {TCartesianVector}
 */
const toCartesian = (polar: TPolarVector): TCartesianVector => ({ x: polar.radius * Math.cos(radiansFromDegrees(polar.degreeAngle)), y: polar.radius * Math.sin(radiansFromDegrees(polar.degreeAngle)) });
/**
 * Convert between polar and cartesian representations of a vector
 * @date 2021-06-13
 * @param {TCartesianVector} v:
 * @returns {TPolarVector}
 */
const toPolar = (v: TCartesianVector): TPolarVector => ({ radius: getModulus(v, false), degreeAngle: degreesFromRadians(Math.atan2(v.y, v.x)) });






/**
 * Adds 2 vectors in cartesian representation 
 * @date 2021-06-13
 * @param {TCartesianVector} v1
 * @param {TCartesianVector} v2
 * @returns {TCartesianVector}
 */
const addCartesianVectors = (v1: TCartesianVector, v2: TCartesianVector): TCartesianVector => ({x: v1.x + v2.x, y: v1.y + v2.y});
/**
 * Multiplies a cartesian vector with a scalar
 * @date 2021-06-13
 * @param {number} scalar
 * @param {TCartesianVector} v
 * @returns {TCartesianVector}
 */
const scalarCartesianProduct = (scalar: number, v: TCartesianVector): TCartesianVector => ({x: scalar * v.x, y: scalar * v.y});











export { toCartesian, toPolar, addCartesianVectors, scalarCartesianProduct, degreesFromRadians, radiansFromDegrees, toUnitVector }