import { addCartesianVectors, scalarCartesianProduct, toCartesian, toPolar, toUnitVector } from "../utils/vector.utils";
import { areNumericObjectsEqual, hasProblematicValue } from "../App.utils";

import type { TCartesianVector } from "../utils/vector.types";
import type { TComponentRepresentationHandlers, TOperand, TRepresentationLabels, TRepresentationValues } from "./Operands.types";






/**
 * Given a vector's cartesian components, a scalar multiplier for the vector, and a sign 
 * (indicating whether the operand is added to the previous operand), the function will
 * buikld an object to type `TOperand`
 * @date 2021-06-13
 * @param {number} x: cartesian x-component
 * @param {number} y: cartesian y-component
 * @param {number} multiplier: scalar multiplier for the operand
 * @param {boolean} isAddedToPrevious: Is operand added to the previous operand in the sum towards the resultant vector?
 * @returns {TOperand} "TOperand" object
 */
const operandFromVector = (x?: number, y?: number, multiplier: number = 1, isAddedToPrevious: boolean = true): TOperand => ({
	isAddedToPrevious,
	scalarMultiplier: multiplier,
	xComponent: x ? x : 0,
	yComponent: y ? y : 0
});
/**
 * Given an operand (x, y, scalar) object, compute the cartesian vector associated -> k * {x,y}
 * @date 2021-06-13
 * @param {TOperand} op: The operand to change to vector
 * @returns {TCartesianVector}: The resulting cartesian vector
 */
const operandToVector = (op: TOperand): TCartesianVector => {
	if(hasProblematicValue(op)) return;

	return scalarCartesianProduct(
		op.scalarMultiplier , 
		{x: op.xComponent, y: op.yComponent}
	)
};
/**
 * Return the sum (as a cartesian vector) of a cartesian vector "acc" and the operand object "op"
 * The function is designed to be used with ``arr.reduce``, to sum an array of ``TOperand`` objects
 * @date 2021-06-13
 * @param {TCartesianVector} acc
 * @param {TOperand} op
 * @returns {TCartesianVector} acc + op
 */
const sumOperands = (acc: TCartesianVector, op: TOperand) => addCartesianVectors(
	acc, 
	scalarCartesianProduct(
		(op.isAddedToPrevious ? 1 : -1), 
		operandToVector(op)
	)
);






/**
 * Centralizes the code for operands CRUD operations given the current vector ***representation*** setting at the app level.
 * Higher order function that will return the functions needed by the vector editor to update, retrieve and delete operands.
 * @date 2021-06-13
 * @param {boolean} usePolarForm: App level setting for vector representation (polar vs cartesian)
 * @param {Function} getOperand: Function with a closure on the current operands object in the app, get operand at `index`
 * @param {Function} setOperand: Function with a closure on the current operands object in the app, replace operand at `index`
 * @param {Function} deleteOperand: Function with a closure on the current operands object in the app, remove operand at `index`
 * @returns {TComponentRepresentationHandlers}: Handle for the vector editor functionality
 */
const operandEditorProxyHOF = (usePolarForm: boolean, getOperand: (index: number) => TOperand, setOperand: (op: TOperand, index: number)=>void, deleteOperand: (index: number)=>void): TComponentRepresentationHandlers=>{
	
	// The vector editor does not know the current representation (polar or cartesian). It gets its input labels from here
	const cartesianLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "x-component", component2: "y-component" }
	const polarLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "polar-length", component2: "polar-angle (degrees)" }
	

	/**
	 * Get's the operand at index and transforms it to the current representation (polar or cartesian)
	 * @date 2021-06-13
	 * @param {number} index:number
	 * @returns {TRepresentationValues} The vector corresponding to the operand at `index` representing according to `usePolarForm`
	 */
	const getComponent = (index: number): TRepresentationValues=> {
		if(hasProblematicValue(index)) return;

		// Obtain the vector associated to the operand at `index` using both representations (cartesian, polar)
		const op = getOperand(index);
		const { x, y } = { x: op.xComponent, y: op.yComponent };
		const { radius, degreeAngle } = usePolarForm ? toPolar({x, y}) : { radius: null, degreeAngle: null };

		// Return the correct repreentation depending on the value of `usePolarForm`
		return { multiplier: op.scalarMultiplier, component1: usePolarForm ? radius : x, component2: usePolarForm ? degreeAngle : y };
	}

	return {
		getLabels: ()=> usePolarForm ? polarLabels : cartesianLabels,
		getComponent: getComponent,
		setComponent: (newValues: TRepresentationValues, isAddedToPrevious: boolean, index: number)=>{
			if(hasProblematicValue(newValues, isAddedToPrevious, index)) return;
			
			const {x, y}: TCartesianVector = !usePolarForm ? {x: newValues.component1, y: newValues.component2} : toCartesian({radius: newValues.component1, degreeAngle: newValues.component2});
			const {isAddedToPrevious: sign, ...rest} = getOperand(index);
			if(areNumericObjectsEqual({xComponent: x, yComponent: y, scalarMultiplier: newValues.multiplier }, rest as any, 0.001) && sign === isAddedToPrevious) return;
			setOperand(operandFromVector(x, y, newValues.multiplier, isAddedToPrevious), index);
		},
		deleteComponent: (index: number) => hasProblematicValue(index) || deleteOperand(index),
		toUnitVector: (index: number) => {
			if(hasProblematicValue(index)) return;

			const op = getOperand(index);
			const {x, y} = toUnitVector({x: op.xComponent, y: op.yComponent}, false);
			setOperand(operandFromVector(x, y, op.scalarMultiplier, op.isAddedToPrevious), index);
		}
	}
}



export { operandFromVector, sumOperands, operandToVector, operandEditorProxyHOF };

