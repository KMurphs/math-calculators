import { areNumericObjectsEqual } from "../utils/math.utils";
import { addCartesianVectors, scalarCartesianProduct, toCartesian, toPolar, toUnitVector } from "../utils/vector.utils";

import type { TOperands } from './Operands.types';
import type { TCartesianVector } from "../utils/vector.types";
import type { TComponentRepresentationHandlers, TOperand, TRepresentationLabels, TRepresentationValues } from "./Operands.types";

const problematicValues = [null, undefined];
const hasProblematicValue = (...args) => args.some(arg => problematicValues.includes(arg));


const buildOperand = (x?: number, y?: number, multiplier: number = 1, isAddedToPrevious: boolean = true): TOperand => ({
	isAddedToPrevious,
	scalarMultiplier: multiplier,
	xComponent: x ? x : 0,
	yComponent: y ? y : 0
});
const operandToVector = (v: TOperand) => {
	if(hasProblematicValue(v)) return;

	return scalarCartesianProduct(
		v.scalarMultiplier , 
		{x: v.xComponent, y: v.yComponent}
	)
};
const sumOperands = (acc, v) => addCartesianVectors(
	acc, 
	scalarCartesianProduct(
		(v.isAddedToPrevious ? 1 : -1), 
		operandToVector(v)
	)
);






const operandEditorProxyHOF = (usePolarForm: boolean, getOperand: (index: number) => TOperand, setOperand: (op: TOperand, index: number)=>void, deleteOperand: (index: number)=>void): TComponentRepresentationHandlers=>{
	const cartesianLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "x-component", component2: "y-component" }
	const polarLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "polar-length", component2: "polar-angle (degrees)" }
	const getComponent = (index: number): TRepresentationValues=> {
		if(hasProblematicValue(index)) return;

		const op = getOperand(index);
		const { x, y } = { x: op.xComponent, y: op.yComponent };
		const { radius, degreeAngle } = usePolarForm ? toPolar({x, y}) : { radius: null, degreeAngle: null };
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
			// console.log("Re-rendering", index, newValues, isAddedToPrevious, x, y, rest)
			setOperand(buildOperand(x, y, newValues.multiplier, isAddedToPrevious), index);
		},
		deleteComponent: (index: number) => hasProblematicValue(index) || deleteOperand(index),
		toUnitVector: (index: number) => {
			if(hasProblematicValue(index)) return;

			const op = getOperand(index);
			const {x, y} = toUnitVector({x: op.xComponent, y: op.yComponent}, false);
			setOperand(buildOperand(x, y, op.scalarMultiplier, op.isAddedToPrevious), index);
		}
	}
}



export { buildOperand, sumOperands, operandToVector, operandEditorProxyHOF };

