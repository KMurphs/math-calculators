import { areNumericObjectsEqual } from "../utils/math.utils";
import { addCartesianVectors, scalarCartesianProduct, toCartesian, toPolar } from "../utils/vector.utils";

import type { TOperands } from './Operands.types';
import type { TCartesianVector } from "../utils/vector.types";
import type { TComponentRepresentationHandlers, TOperand, TRepresentationLabels, TRepresentationValues } from "./Operands.types";




const buildOperand = (x?: number, y?: number, multiplier: number = 1, isAddedToPrevious: boolean = true): TOperand => ({
	isAddedToPrevious,
	scalarMultiplier: multiplier,
	xComponent: x ? x : 0,
	yComponent: y ? y : 0
});
const operandToVector = (v: TOperand) => {
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





const operandComponentsRepresentationProxyHOF = (usePolarForm: boolean, getOperand: (index: number) => TOperand, setOperand: (op: TOperand, index: number)=>void): TComponentRepresentationHandlers=>{
	const cartesianRepresentationLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "x-component", component2: "y-component" }
	const polarRepresentationLabels: TRepresentationLabels = { multiplier: "multiplier", component1: "polar-length", component2: "polar-angle (degrees)" }
	return {
		getComponentsLabels: ()=> usePolarForm ? polarRepresentationLabels : cartesianRepresentationLabels,
		getComponentsValues: (v: TCartesianVector, multiplier: number): TRepresentationValues=> {
			const { radius, degreeAngle } = usePolarForm ? toPolar(v) : { radius: null, degreeAngle: null };
			return { multiplier, component1: usePolarForm ? radius : v.x, component2: usePolarForm ? degreeAngle : v.y };
		},
		setComponentsValue: (newValues: TRepresentationValues, isAddedToPrevious: boolean, index: number)=>{
			const {x, y}: TCartesianVector = !usePolarForm ? {x: newValues.component1, y: newValues.component2} : toCartesian({radius: newValues.component1, degreeAngle: newValues.component2});
			const {isAddedToPrevious: sign, ...rest} = getOperand(index);
			if(areNumericObjectsEqual({xComponent: x, yComponent: y, scalarMultiplier: newValues.multiplier }, rest as any, 0.001) && sign === isAddedToPrevious) return;
			setOperand(buildOperand(x, y, newValues.multiplier, isAddedToPrevious), index);
		}
	}
}



export { buildOperand, sumOperands, operandToVector, operandComponentsRepresentationProxyHOF };

