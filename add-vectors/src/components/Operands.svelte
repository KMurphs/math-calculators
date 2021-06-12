
<script lang="ts">
import { createEventDispatcher } from "svelte";

import Operand from "./Operand.svelte";
import type { TComponentRepresentationHandlers, TOperands } from "./Operands.types";

export let data: TOperands = [];
export let editorProxy: TComponentRepresentationHandlers;
export let vectorToTex: Function;

const dispatch = createEventDispatcher();
const onNewOperand = ()=>dispatch("newOperand");
</script>


{#if data.length > 0}
    <ul class="operands-container reset">
    {#each data as item, i (i)}
        <Operand id={i+1} index={i} {vectorToTex} bind:operand={item} bind:editorProxy={editorProxy}/>
    {/each}
    </ul>
{:else}
    <div class="empty-state" on:click={onNewOperand}> 
        <span class="empty-message">Oups there doesn't seem to be anything to add yet.</span>    
        <span class="empty-icon"><i class="fas fa-plus" aria-hidden="true"></i></span> 
        <span class="empty-message">Click here to get started!</span>    
    </div>
{/if}



<style>
:global(.operands-container .operand-container:first-of-type .math-sign){
    visibility: hidden;
}


.empty-state{
    border: 1px solid #61bf9e;
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dffff4;
    flex-direction: column;
    color: #125d42;
    cursor: pointer;
}
.empty-state:hover{
    background: #c7fbe9;
}
.empty-message{
    display: block;
    font-size: .8rem;
    text-align: center;
    max-width: 75%;
}
.empty-icon{
    font-size: 2rem;
    margin-bottom: .5rem;
}
</style>