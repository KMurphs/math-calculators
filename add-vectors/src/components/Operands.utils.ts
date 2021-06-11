import { addCartesianVectors, scalarCartesianProduct } from "../utils/vector.utils";
import type { TOperand } from "./Operands.types";


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
export { buildOperand, sumOperands, operandToVector };

