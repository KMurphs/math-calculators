
<script lang="ts">
import { onMount, beforeUpdate, afterUpdate } from 'svelte';
import { toPolar } from "../utils/vector.utils";
import { texFromCartesianVector, texFromPolarVector } from "../utils/mathjax.utils";
import { clearCanvas, drawCanvasAxis, drawVectors } from "../utils/canvas.utils";
import type { TCanvasData } from "../utils/canvas.types";
import type { TComponents } from "./Results.types";
import type { TCartesianVector } from '../utils/vector.types';

export let data: TComponents = [];
export let result: TCartesianVector = {x: 1.25, y: 2.35};
export let usePolarForm: boolean = false;




/** Tex Logic */
const resultToTex = (usePolarForm, vector) => {
    if(!usePolarForm) return texFromCartesianVector(vector.x, vector.y);
    const polar = toPolar({x: vector.x, y: vector.y});
    return texFromPolarVector(polar.radius, polar.degreeAngle);
};

// http://docs.mathjax.org/en/latest/web/typeset.html
// window.MathJax.typesetClear()
// node.innerHTML = '$$\\frac{a}{1-a^3}$$';
// window.MathJax.typeset()
let resultant: HTMLElement = null;
onMount(() => (resultant = document.getElementById("resultant")));
beforeUpdate(() => {
    if(!resultant) return;
    (window as any).MathJax?.typesetClear();
    resultant.innerHTML = `\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = ` + resultToTex(usePolarForm, result);
});
afterUpdate(() => (window as any).MathJax?.typeset());




/** Canvas Logic */
const canvasHeight = 300;
const canvasWidth = 300;
let canvas: TCanvasData = null;
const getUnit = (arr: TComponents)=>0.4 * canvasWidth / arr.reduce((acc, item) => Math.max(acc, item.x, item.y), 1);

onMount(() => {
    const canvasNode: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const unit = getUnit([...data, result]);
    canvas = {
        canvas: canvasNode,
        context: canvasNode.getContext("2d"),
        xCenter: canvasWidth / 2, 
        yCenter: canvasHeight / 2,  
        xUnit: unit,  
        yUnit: unit
    }
    drawCanvasAxis(canvas);
});


$: data && canvas && (usePolarForm || true) && clearCanvas(canvas);
$: data && canvas && (usePolarForm || true) && drawCanvasAxis(canvas);
$: data && canvas && (usePolarForm || true) && drawVectors(
    canvas, 
    usePolarForm ? null : data,
    usePolarForm ? data.map(toPolar) : null,
    false
);
$: data && canvas && (usePolarForm || true) && drawVectors(
    canvas, 
    usePolarForm ? null : [result],
    usePolarForm ? [result].map(toPolar) : null,
    true
);

</script>



<canvas id="canvas" width={canvasWidth} height={canvasHeight} class="canvas">
    Your browser does not support the canvas element.
</canvas>

<div id="resultant" class="resultant">
    {`\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) `} 
</div>






<style>
canvas{
	border: 1px solid #c3c3c3; 
	max-width: 100%; 
	margin: 0 auto; 
	background: #eee; 
	display: block;
}
canvas{
	margin-bottom: .5rem;
}
#resultant{
	margin: 0 auto;
    text-align: center;
}
</style>