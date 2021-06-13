
<script lang="ts">
import type { TCartesianVector } from '../utils/vector.types';
import MathJaxNode from './MathJaxNode.svelte';

export let resultant: TCartesianVector = {x: 1.25, y: 2.35};
export let vectorToTex: (v: TCartesianVector) => string = null;
</script>


<slot name="canvas"></slot>

<div id="resultant" class="resultant">
    <MathJaxNode mathjaxExpression={`\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = ` + vectorToTex(resultant)}/>
</div>



<style>

#resultant{
	margin: 0 auto;
    text-align: center;
    color: var(--color-secondary-dark);
}
</style>