import type { TCanvasParameters } from "../utils/canvas.types"

/**
 * Build a proxy object for the `VectorCanvas` component to interact with the canvas object 
 * @date 2021-06-13
 * @param {any} canvasNode:HTMLCanvasElement
 * @param {any} unit:number
 * @param {any} dimension:number
 * @returns {any}
 */
const buildCanvasData = (canvasNode: HTMLCanvasElement, unit: number, dimension: number): TCanvasParameters=>({
    node: canvasNode,
    context: canvasNode.getContext("2d"),
    xCenter: dimension / 2, 
    yCenter: dimension / 2,  
    xUnit: unit,  
    yUnit: unit
})


export { buildCanvasData }