
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
export let mathjaxExpression = '';
// http://docs.mathjax.org/en/latest/web/typeset.html
// window.MathJax.typesetClear()
// node.innerHTML = '$$\\frac{a}{1-a^3}$$';
// window.MathJax.typeset()
// Do not give any argument to the typeset functions to
// re-render the whole page
let mathjaxDOMNode: HTMLElement = null;
const forceMathjaxRender = (node: HTMLElement) => (window as any).MathJax?.typeset([node]) 
const resetMathjaxNode = (node: HTMLElement, innerHtml: string) => {
    if(!node || !innerHtml) return;
    // New math expression
    node.innerHTML = innerHtml;
    // Tell mathjax to forget that it processed this node before
    // (window as any).MathJax?.typesetClear([node]);
    (window as any).MathJax?.typesetClear([node]);
}
onMount(() => {
    resetMathjaxNode(mathjaxDOMNode, mathjaxExpression);
    tick().then(()=>forceMathjaxRender(mathjaxDOMNode));
});
beforeUpdate(() => resetMathjaxNode(mathjaxDOMNode, mathjaxExpression));
afterUpdate(() => forceMathjaxRender(mathjaxDOMNode));

</script>


<span id={id} bind:this={mathjaxDOMNode} class={extraClasses}></span>

