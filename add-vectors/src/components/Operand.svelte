



<script lang="ts">
import MathJaxNode from "./MathJaxNode.svelte";
import CheckBoxWithIcons from "./CheckBoxWithIcons.svelte";
import VectorEditor from "./VectorEditor.svelte";
import { operandToVector } from "./Operands.utils";
import type { TComponentRepresentationHandlers, TOperand, TRepresentationLabels, TRepresentationValues } from "./Operands.types";
import { afterUpdate } from "svelte";



export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;


export let operand: TOperand = null;
let isAdded: boolean;
$: isAdded = operand.isAddedToPrevious;

export let vectorToTex: Function = null;
$: texVector = vectorToTex(operandToVector(operand));






export let editorProxy: TComponentRepresentationHandlers = null;
export let index = 0;

/** Get labels for the editing window */
let labels: TRepresentationLabels
$: labels = editorProxy.getLabels();
/** Get current representation (polar or cartesian) for the operand at index */
let vector: TRepresentationValues 
$: vector = editorProxy.getComponent(index);;

/** Logic to allow notification of local changes to vector to the remote source object (in an ancestor) in batch */
let timerHandler;
$: {
	clearTimeout(timerHandler);
	timerHandler = setTimeout(()=>editorProxy.setComponent(vector, isAdded, index), 200);
}

const handleDelete = ()=>editorProxy.deleteComponent(index);
const handleToUnitVector = ()=>editorProxy.toUnitVector(index);



let isEditing = false;
let containerNode: HTMLElement;
/** When opening editor mode, make sure the editing window is entirely visible by scrolling it into view */
afterUpdate(()=>isEditing && containerNode && containerNode.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"}));


</script>





<li class={`operand-container ${isEditing ? 'operand-container--opened' : ''}`} bind:this={containerNode}>
	
	<div class="math-sign">
		<CheckBoxWithIcons extraClasses={'sign-checkbox'} checked={!isAdded} on:change={ev => isAdded = !(ev.detail)}>
			<i slot="falseIcon" class="fas fa-plus" aria-hidden="true"></i>
			<i slot="trueIcon" class="fas fa-minus" aria-hidden="true"></i>
		</CheckBoxWithIcons>
	</div>
	<div class="math-expression">
		<MathJaxNode mathjaxExpression={`<span class="vector-name ${isEditing? '' : 'muted-text'}">\\(\\overrightarrow{V_{${id}}}\\) = </span>` + texVector}/>
	</div>

	<input type="checkbox" class="edit-mode" id={`edit-mode-${actualId}`} bind:checked={isEditing}>
	<label for={`edit-mode-${actualId}`} class="edit-controls">
		<span class="edit"><i class="fas fa-pen" aria-hidden="true"></i></span>
		<span class="done"><i class="fas fa-check" aria-hidden="true"></i></span>
	</label>


	<div class="collapsable">
	</div>
	<div class="math-components collapsable">
		<VectorEditor {labels} {vector} on:change={ev => vector = ev.detail}/>
	</div>
	<div class="other-controls collapsable">
		<span class="edit" on:click={handleDelete}><i class="fas fa-trash" aria-hidden="true"></i></span>
		<span class="edit" on:click={handleToUnitVector}><i class="fas fa-pen" aria-hidden="true"></i></span>
	</div>


	


</li>


<style>
.operand-container{
	display: grid;
	grid-template: 2rem auto / 2rem 1fr 2rem;
	overflow-y: hidden;
	grid-gap: 0 .5rem;
	margin-bottom: 1rem;
}
:global(.sign-checkbox){
	transform: scale(.8);
    --true-font-color: #cf5050 !important;
    --true-focus-color: #ebc2c280 !important;
    --true-border-color: #ffdada !important;
    --false-border-color: rgba(0,0,0,0.1) !important;
}

.math-sign,
.edit-controls,
.other-controls{
	display: flex;
	justify-content: center;
	align-items: baseline;
}
.math-expression{
	padding-left: .5rem;
	display: flex;
	align-items: end;
}
.edit-controls span,
.other-controls span{
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	color: #ddd;
	color: var(--color-accent);
	cursor: pointer;
	/* background-color: #eee; */
}
.edit-controls span:hover,
.other-controls span:hover{
	background: rgba(0,0,0,.05);
}
.edit-controls span:focus,
.other-controls span:focus{
	background: rgba(0,0,0,.1);
}
.edit-controls span:active,
.other-controls span:active{
	background: var(--color-accent);
	color: var(--color-primary-light);
}
.math-components{
	padding: 1rem .5rem;
	padding-left: 2.5rem;
}
.other-controls{
	padding: 1rem 0;
	flex-direction: column;
	justify-content: flex-start;
}
.other-controls span{
	border: 1px solid rgba(0,0,0,0.1);
	margin-bottom: .5rem;
}



input[type="checkbox"].edit-mode{
	position: absolute;
	left: -10000px;
	top: 0;
	overflow: hidden;
	width: 1px;
	height: 1px;
}
input[type="checkbox"].edit-mode ~ label .edit{ display: inline-flex; }
input[type="checkbox"].edit-mode ~ label .done{ display: none; }
input[type="checkbox"].edit-mode:checked ~ label .edit{ display: none; }
input[type="checkbox"].edit-mode:checked ~ label .done{ display: inline-flex; background: var(--color-accent-lighter); }



.collapsable{ transition: all .2s;  }
input[type="checkbox"].edit-mode:not(:checked) ~ .collapsable{ height: 0; overflow: hidden; padding-top: 0; padding-bottom: 0; } 
/* input[type="checkbox"].edit-mode:checked ~ .collapsable{ height: auto; } */

:global(.operand-container .muted-text){ color: var(--color-primary-light2);}
:global(.operand-container .vector-name){ margin-right: .5rem; }
</style>
