
<script lang="ts">
import { texFromCartesianVector, texFromPolarVector } from "../mathjax.utils";
import { toPolar } from "../vector.utils";

import type { TComponent, TComponents } from "./Results.utils";
export let data: TComponents = [];
export let result: TComponent = {x: 1.25, y: 2.35};
export let usePolarForm: boolean = false;

const texFromVector = !usePolarForm ? texFromCartesianVector : (x, y) => {
    const polar = toPolar({x, y});
    return texFromPolarVector(polar.radius, polar.degreeAngle);
};
</script>



<canvas id="canvas" width="500" height="500" class="canvas">
    Your browser does not support the canvas element.
    {data[0]?.x}
    {usePolarForm}
</canvas>

<div id="resultant" class="resultant">
    {`\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = ${texFromVector(result.x, result.y)}`}
    <!-- {`\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = 1.234 \\(\\overrightarrow{e_x}\\) + 2536 \\(\\overrightarrow{e_y}\\) = 1.234 ∠ 2536°`} -->
    <!-- {`\\(\\vec x\\)  and \\(\\overrightarrow{e_x}\\)  and \\(\\overrightarrow{R}\\) and \\(\\overrightarrow{x_1y^2}\\)`} -->
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