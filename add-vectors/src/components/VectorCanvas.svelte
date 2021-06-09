<script lang="ts">
import { onMount } from "svelte";
import { buildCanvasData, clearCanvas, drawCanvasAxis, getUnit } from "../utils/canvas.utils";
import type { TCanvasParameters } from "../utils/canvas.types";
import type { TCartesianVector } from "../utils/vector.types";

export let vectors: TCartesianVector[];
export let resultant: TCartesianVector;
export let getDrawer: Function;

const canvasHeight = 300;
const canvasWidth = 300;
let canvas: TCanvasParameters = null;

onMount(() => {
    const canvasNode: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const unit = getUnit(canvasWidth, [...vectors, resultant]);
    canvas = buildCanvasData(canvasNode, unit);
    drawCanvasAxis(canvas);
});

$: canvas && vectors && getDrawer && clearCanvas(canvas);
$: canvas && vectors && getDrawer && drawCanvasAxis(canvas);
$: canvas && vectors && getDrawer(canvas)(vectors, "#000");
$: canvas && vectors && getDrawer(canvas)([resultant], "#F00");
</script>


<canvas  id="canvas" width={canvasWidth} height={canvasHeight} class="canvas">
	Your browser does not support the canvas element.
</canvas> 


<style>
canvas{
	border: 1px solid #c3c3c3; 
	max-width: 100%; 
	margin: 0 auto; 
	background: #eee; 
	display: block;
	margin-bottom: .5rem;
}
</style>