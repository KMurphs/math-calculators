
<script lang="ts">
import Operand from "./Operand.svelte";
import type { TOperands } from "./Operands.types";

export let data: TOperands = [];
export let vectorToTex: Function;
</script>


<ul class="operands-container reset">
{#each data as item, i (i)}
    <Operand id={i+1} {vectorToTex} operand={item}/>
{/each}
</ul>



<style>
:global(.operands-container .operand-container:first-of-type .operand-pre-operation){
    visibility: hidden;
}
</style>