import { addCartesianVectors, scalarCartesianProduct } from "../utils/vector.utils";

export type TOperand = {
	isAddedToPrevious: boolean,
	scalarMultiplier: number,
	xComponent: number,
	yComponent: number
};

export type TOperands = TOperand[];


const buildOperand = (x?: number, y?: number): TOperand => ({
	isAddedToPrevious: true,
	scalarMultiplier: 1,
	xComponent: x ? x : 0,
	yComponent: y ? y : 0
});
const sumOperands = (acc, v) => addCartesianVectors(
	acc, 
	scalarCartesianProduct(
		v.scalarMultiplier * (v.isAddedToPrevious ? 1 : -1), 
		{x: v.xComponent, y: v.yComponent}
	)
);
export { buildOperand, sumOperands };