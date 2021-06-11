import type { TCartesianVector } from "../utils/vector.types";

export type TOperand = {
	isAddedToPrevious: boolean,
	scalarMultiplier: number,
	xComponent: number,
	yComponent: number
};

export type TRepresentationLabels = { multiplier: string, component1: string, component2: string }
export type TRepresentationValues = { multiplier: number, component1: number, component2: number }
export type TComponentsValueSetter = (newValues: TRepresentationValues, isAddedToPrevious: boolean, indexToUpdate: number)=>void 
export type TComponentsValueGetter = (vector: TCartesianVector, multiplier: number) => TRepresentationValues
export type TComponentRepresentationHandlers = { 
	getComponentsLabels: ()=>TRepresentationLabels, 
	setComponentsValue: TComponentsValueSetter,
	getComponentsValues: (v: TCartesianVector, multiplier: number) => TRepresentationValues
}
export type TOperands = TOperand[];

