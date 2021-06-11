



<script lang="ts">
import MathJaxNode from "./MathJaxNode.svelte";
import RadioButton from "./RadioButton.svelte";
import CheckBoxWithIcons from "./CheckBoxWithIcons.svelte";
import { operandToVector } from "./Operands.utils";
import type { TComponentRepresentationHandlers, TOperand, TRepresentationLabels, TRepresentationValues } from "./Operands.types";
import VectorEditor from "./VectorEditor.svelte";
import Input from "./Input.svelte";


export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;

export let index = 0;

let operations = ["plus","minus"]
let operationsIndex = 0;
let addToPrevious = true;
$: addToPrevious = operationsIndex == 0;


export let vectorToTex: Function;
export let operand: TOperand;
$: texVector = `\\(\\overrightarrow{V_${id}}\\) = ` + vectorToTex(operandToVector(operand));



export let editorProxy: TComponentRepresentationHandlers;

let labels: TRepresentationLabels;
$: labels = editorProxy.getComponentsLabels();

let vector: TRepresentationValues;
$: vector = editorProxy.getComponentsValues({x: operand.xComponent, y: operand.yComponent}, operand.scalarMultiplier);

let isAdded: boolean;
$: isAdded = operand.isAddedToPrevious;

let timerHandler;
$: {
	clearTimeout(timerHandler);
	timerHandler = setTimeout(()=>editorProxy.setComponentsValue(vector, isAdded, index), 200);
}



let isEditing = false;
</script>





<li class={`operand-container ${isEditing ? 'operand-container--opened' : ''}`}>
	
	<div class="math-sign">
		<CheckBoxWithIcons extraClasses={'sign-checkbox'} checked={!isAdded} on:change={ev => isAdded = !(ev.detail)}>
			<i slot="falseIcon" class="fas fa-plus" aria-hidden="true"></i>
			<i slot="trueIcon" class="fas fa-minus" aria-hidden="true"></i>
		</CheckBoxWithIcons>
	</div>
	<div class="math-expression">
		<MathJaxNode mathjaxExpression={texVector}/>
	</div>
	<label for={`edit-mode-${actualId}`} class="edit-controls">
		<input type="checkbox" class="edit-mode" id={`edit-mode-${actualId}`} bind:checked={isEditing}>
		<span class="edit"><i class="fas fa-pen" aria-hidden="true"></i></span>
		<span class="done"><i class="fas fa-check" aria-hidden="true"></i></span>
	</label>


	<div class="collapsable">
	</div>
	<div class="math-components collapsable">
		<VectorEditor {labels} {vector} on:change={ev => vector = ev.detail}/>
	</div>
	<div class="other-controls collapsable">
		<span class="edit"><i class="fas fa-pen" aria-hidden="true"></i></span>
	</div>


	


</li>


<style>
.operand-container{
	display: grid;
	grid-template: 2rem auto / 2rem 1fr 2rem;
	overflow-y: hidden;
	grid-gap: 0 .5rem;
}
:global(.sign-checkbox){
	transform: scale(.8);
    --true-font-color: #cf5050 !important;
    --true-focus-color: #ebc2c280 !important;
    --true-border-color: #ffdada !important;
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
	cursor: pointer;
	/* background-color: #eee; */
}
.math-components{
	padding: 1rem .5rem;
}
.other-controls{
	padding: 1rem 0;
}



input[type="checkbox"].edit-mode{
	position: absolute;
	left: -10000px;
	overflow: hidden;
	width: 1px;
	height: 1px;
}
input[type="checkbox"].edit-mode ~ .edit{ display: inline-flex; }
input[type="checkbox"].edit-mode ~ .done{ display: none; }
input[type="checkbox"].edit-mode:checked ~ .edit{ display: none; }
input[type="checkbox"].edit-mode:checked ~ .done{ display: inline-flex; }
</style>
