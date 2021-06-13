import { texFromCartesianVector, texFromPolarVector } from "./utils/mathjax.utils";
import type { TCartesianVector } from "./utils/vector.types";
import { toPolar } from "./utils/vector.utils";

/**
 * Given the state of `usePolarForm`, the function returns a tex string for either the polar or cartesian form
 * of `vector`
 * @date 2021-06-13
 * @param {boolean} usePolarForm: boolean
 * @param {TCartesianVector} vector: TCartesianVector
 * @returns {string}: Tex string for `vector`
 */
const vectorToTex = (usePolarForm: boolean, vector: TCartesianVector): string => {
    if(!vector) return "";

    // Return the tex string for the cartesian vector
	if(!usePolarForm) return texFromCartesianVector(vector.x, vector.y);
    
    // Compute polar form, then return the tex string for the computed polar vector
	const polar = toPolar(vector);
    return texFromPolarVector(polar.radius, polar.degreeAngle);
};

/**
 * Bring an HTML DOM node/element in view by scrolling its parent container
 * @date 2021-06-13
 * @param {HTMLElement} node: HTMLElement
 * @returns {void}
 */
const scrollToBottom = (node: HTMLElement) => node.scrollTo(0, node.scrollHeight);




const problematicValues = [null, undefined];
/**
 * Utility to check whether an argument in a list of arguments contains problematic values (null, undefined)
 * @param {any[]} args
 * @returns {boolean} 
 */
const hasProblematicValue = (...args) => args.some(arg => problematicValues.includes(arg));


/**
 * Tests whether 2 numbers are the same by asserting whether their difference is below some threshold `epsilon`
 * @date 2021-06-13
 * @param {number} num1:number
 * @param {number} num2:number
 * @param {number} epsilon:number=Number.EPSILON
 * @returns {boolean}
 */
const areNumbersAlmostEqual = (num1: number, num2: number, epsilon: number = Number.EPSILON) => Math.abs( (num1 || 0) - (num2 || 0) ) < epsilon;
/**
 * Tests whether 2 numeric objects are the same
 * @date 2021-06-13
 * @param {{[key:string]:number}} obj1
 * @param {{[key:string]:number}} obj2
 * @param {number} epsilon:number=Number.EPSILON
 * @returns {boolean}
 */
const areNumericObjectsEqual = (obj1: {[key:string]:number}, obj2: {[key:string]:number}, epsilon: number = Number.EPSILON) => Object.keys(obj1).reduce((acc, key) => acc && areNumbersAlmostEqual(obj1[key], obj2[key], epsilon), true);





/**
 * Injects a css custom property '--vh'. The css native vh unit does not behave properly on phone with a navigation bar.<br/>
 * 
 * Usage: 
 * ```
 * 	    injectVHInCSS(); // Run it on load
 * 	    windowaddEventListener('resize', injectVHInCSS); // Run it on resize
 * ```
 * @date 2021-06-13
 * @returns {void}.
 */
const injectVHInCSS = ()=>{
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}



export { areNumbersAlmostEqual, areNumericObjectsEqual, vectorToTex, scrollToBottom, hasProblematicValue, injectVHInCSS }