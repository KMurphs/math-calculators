
<script lang="ts">


export let extraClasses = '';


/** Logic to get a unique ID for each mathjax node*/
import { writable } from 'svelte/store';
const nodeId = writable(-1);
const getId = () => { 
    nodeId.update(v => v + 1); 
    return $nodeId;
}
const id = `${new Date().getTime()}-${getId()}`;




/** Logic to re-render mathjax nodes*/
import { afterUpdate, beforeUpdate, onMount, tick } from 'svelte';
import { forceMathjaxRender, resetMathjaxNode } from '../utils/mathjax.utils';
export let mathjaxExpression = '';

let mathjaxDOMNode: HTMLElement = null;

onMount(() => {
    resetMathjaxNode(mathjaxDOMNode, mathjaxExpression);
    tick().then(()=>forceMathjaxRender(mathjaxDOMNode));
});
beforeUpdate(() => resetMathjaxNode(mathjaxDOMNode, mathjaxExpression));
afterUpdate(() => forceMathjaxRender(mathjaxDOMNode));

</script>


<span id={id} bind:this={mathjaxDOMNode} class={extraClasses}></span>

