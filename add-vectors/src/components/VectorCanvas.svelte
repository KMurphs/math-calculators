<script lang="ts">
import { onMount, tick } from "svelte";
import { clearCanvas, drawCanvasAxis, getUnit } from "../utils/canvas.utils";
import { buildCanvasData } from "./VectorCanvas.utils";

import type { TCanvasParameters } from "../utils/canvas.types";
import type { TCartesianVector } from "../utils/vector.types";





export let vectors: TCartesianVector[];
export let resultant: TCartesianVector;
export let getBulkDrawer: Function;





/** Logic to get a handle on the canvas object */
let canvas: TCanvasParameters = null;
let canvasWidth = 500;
let canvasHeight = 500;
let canvasNode: HTMLCanvasElement = null;
const setupCanvas = (canvasNode: HTMLCanvasElement) => {

	// Compute dimension to ensure the canvas html node is always a square
	const dimension = Math.min(canvasNode.clientHeight, canvasNode.clientWidth);

	// Compute a canvas unit to prevent drawings to overflow
	const unit = getUnit(dimension, [...vectors, resultant]);

	// Build a proxy for the canvas object
	canvas = buildCanvasData(canvasNode, unit, dimension);

	// Update canvas internal dimension (to prevent blurry images)
	canvasWidth = dimension;
	canvasHeight = dimension;
}
onMount(()=>setupCanvas(canvasNode));
window.addEventListener('resize', ()=>setupCanvas(canvasNode));


/** Logic to redraw reactively when the data for the canvas change*/
const operandsCanvasColor = "#333";
const resultantCanvasColor = "#00617F";//"#b1289a";
$: canvas && vectors && getBulkDrawer && setupCanvas(canvasNode);
$: canvas && vectors && getBulkDrawer && tick().then(() => { clearCanvas(canvas); drawCanvasAxis(canvas) });
$: canvas && vectors && tick().then(() => { 
	// Draw operand vectors
	getBulkDrawer(canvas)(vectors, operandsCanvasColor); 
	// Draw resultant vector
	getBulkDrawer(canvas)([resultant], resultantCanvasColor); 
});
</script>


<canvas  id="canvas" width={canvasWidth} height={canvasHeight} class="canvas" bind:this={canvasNode}>
	Your browser does not support the canvas element.
</canvas> 


<style>
canvas{
	border: 1px solid #c3c3c3; 
	max-width: 100%; 
	width: 100%; 
	margin: 0 auto; 
	/* background: #eee;  */
	display: block;
	margin-bottom: .5rem;
}
</style>