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
	/**
	 * Allows Vector Editor to obtain the labels depending on the current vector representation in the app (polar vs cartesian)
	 * @date 2021-06-13
	 * @returns {TRepresentationLabels}
	 */
	getLabels: ()=>TRepresentationLabels, 
	/**
	 * Update the operand associated with `index`, given the new value of the associated vector in the current reprensentation
	 * @date 2021-06-13
	 * @param {TRepresentationValues} newValues:TRepresentationValues
	 * @param {boolean} isAddedToPrevious:boolean
	 * @param {number} indexToUpdate:number
	 * @returns {void}
	 */
	setComponent: TComponentsValueSetter,
	/**
	 * Allows Vector Editor to obtain the vector in the current representation set for the app (polar vs cartesian)
	 * @date 2021-06-13
	 * @param {number} index:number
	 * @returns {TRepresentationLabels}
	 */
	getComponent: (index: number) => TRepresentationValues,
	/**
	 * Delete the operand associated with `index`
	 * @date 2021-06-13
	 * @param {number} index:number
	 * @returns {void}
	 */
	deleteComponent: (index: number) => void
	/**
	 * Change the operand associated with `index` to a unit vector (with modulus 1)
	 * @date 2021-06-13
	 * @param {number} index:number
	 * @returns {any}
	 */
	toUnitVector: (index: number) => void
}
export type TOperands = TOperand[];

