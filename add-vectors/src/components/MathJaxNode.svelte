
<script lang="ts">

export let mathjaxExpression = '';


/** Logic to get a unique ID for each mathjax node*/
import { writable } from 'svelte/store';
const nodeId = writable(-1);
const getId = () => { 
    nodeId.update(v => v + 1); 
    return $nodeId;
}
const id = `${new Date().getTime()}-${getId()}`;




/** Logic to re-render mathjax nodes*/
import { afterUpdate, beforeUpdate, onMount } from 'svelte';

// http://docs.mathjax.org/en/latest/web/typeset.html
// window.MathJax.typesetClear()
// node.innerHTML = '$$\\frac{a}{1-a^3}$$';
// window.MathJax.typeset()
// Do not give any argument to the typeset functions to
// re-render the whole page
let mathjaxDOMNode: HTMLElement = null;
onMount(() => {
    mathjaxDOMNode = document.getElementById(id);
    mathjaxDOMNode.innerHTML = mathjaxExpression;
});
beforeUpdate(() => {
    if(!mathjaxDOMNode) return;
    (window as any).MathJax?.typesetClear([mathjaxDOMNode]);
    mathjaxDOMNode.innerHTML = mathjaxExpression;
});
afterUpdate(() => (window as any).MathJax?.typeset([mathjaxDOMNode]));

</script>


<span id={id}></span>

