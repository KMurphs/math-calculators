<script lang="ts">
import { onMount, tick } from "svelte";
import { buildCanvasData, clearCanvas, drawCanvasAxis, getUnit } from "../utils/canvas.utils";
import type { TCanvasParameters } from "../utils/canvas.types";
import type { TCartesianVector } from "../utils/vector.types";

export let vectors: TCartesianVector[];
export let resultant: TCartesianVector;
export let getBulkDrawer: Function;

let canvas: TCanvasParameters = null;
let canvasWidth = 500;
let canvasHeight = 500;
const setupCanvas = () => {
    const canvasNode: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
	const dimension = Math.min(canvasNode.clientHeight, canvasNode.clientWidth);
	const unit = getUnit(dimension, [...vectors, resultant]);
    canvas = buildCanvasData(canvasNode, unit, dimension);
	canvasWidth = dimension;
	canvasHeight = dimension;
}
onMount(setupCanvas);
window.addEventListener('resize', setupCanvas);


// $: canvas && vectors && getBulkDrawer && console.log("Re-rendering canvas", canvas, canvas.node?.parentElement.clientWidth);
$: canvas && vectors && getBulkDrawer && tick().then(() => { clearCanvas(canvas); drawCanvasAxis(canvas) });
$: canvas && vectors && tick().then(() => { getBulkDrawer(canvas)(vectors, "#000"); getBulkDrawer(canvas)([resultant], "#F00"); });
</script>


<canvas  id="canvas" width={canvasWidth} height={canvasHeight} class="canvas">
	Your browser does not support the canvas element.
</canvas> 


<style>
canvas{
	border: 1px solid #c3c3c3; 
	max-width: 100%; 
	width: 100%; 
	margin: 0 auto; 
	background: #eee; 
	display: block;
	margin-bottom: .5rem;
}
</style>