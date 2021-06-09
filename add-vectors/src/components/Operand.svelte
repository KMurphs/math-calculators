



<script lang="ts">
import MathJaxNode from "./MathJaxNode.svelte";
import RadioButton from "./RadioButton.svelte";
import { operandToVector } from "./Operands.utils";
import type { TOperand } from "./Operands.types";


export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;


let operations = ["plus","minus"]
let operationsIndex = 0;
let addToPrevious = true;
$: addToPrevious = operationsIndex == 0;


export let vectorToTex: Function;
export let operand: TOperand;
$: texVector = `\\(\\overrightarrow{V_${id}}\\) = ` + vectorToTex(operandToVector(operand));


let isEditing = false;
</script>





<li class={`operand-container ${isEditing ? 'operand-container--opened' : ''}`}>
	
	<div class="operand-pre-operation">
		{#each operations as operation, i (operation)}
			<RadioButton bind:radioGroup={operationsIndex} value={i} id={i}>
				<i slot="icon" class={`fas fa-${operation}`} aria-hidden="true"></i>
				<!-- <span>{operation}</span> -->
			</RadioButton>
		{/each}
	</div>


	<div class="operand-expression-container">
		<span id={`operand-${actualId}`} class="operand-representation">
			<MathJaxNode mathjaxExpression={texVector}/>
		</span>
		<label class="operand-controls" for={`edit-mode-${actualId}`}>
			<input type="checkbox" class="edit-mode" id={`edit-mode-${actualId}`} bind:checked={isEditing}>
			<span class="edit"><i class="fas fa-pen" aria-hidden="true"></i></span>
			<span class="done"><i class="fas fa-check" aria-hidden="true"></i></span>
		</label>
	</div>

	
	<div class={`operand-edit-container ${isEditing ? 'operand-edit-container--opened' : ''}`}>
		<div class="operand-representation">
			<span class="operand-k">k</span>
			<span class="operand-x">x</span>
			<span class="operand-y">y</span>
		</div>
		<div class="operand-controls">
			<span><strong>1</strong></span>
		</div>
	</div>

</li>


<style>
.operand-container{
	display: grid;
	grid-template: auto 1fr / auto 1fr;
	overflow-y: hidden;
}
.operand-container--opened{
	border-bottom: 1px solid #ddd;
	margin-bottom: .5rem;
}
.operand-expression-container{
	grid-area: 1 / 2 / 2 / 3;
	display: flex;
	align-items: baseline;
}
.operand-edit-container{
	grid-area: 2 / 2 / 3 / 3;
	display: flex;
	margin-top: .5rem;
	transition: all .3s;
	opacity: 0;
	overflow-y: hidden;
	height: 0;
	/* margin-top: -100rem; */
	/* z-index: -1; */
}
.operand-edit-container--opened{
	opacity: 1;
	height: 5rem;
	/* margin-top: 0.5rem; */
	/* z-index: 0; */
}
.operand-pre-operation{
	display: flex;
	margin-right: 1rem;
	margin-left: .2rem;
	align-self: end;
	opacity: .1;
}
.operand-container--opened .operand-pre-operation,
.operand-pre-operation:hover,
.operand-pre-operation:focus{
	opacity: 1;
}
:global(.operand-pre-operation .radio-custom-container){
	margin-right: 2px;
}
.operand-representation{
	flex: 1 1 2rem;
}
.operand-controls{
	flex: 0 0 2rem;
	display: flex;
	flex-direction: column;
}
.operand-controls span{
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
.operand-controls span:hover{
	color: #555;
	background-color: #eee;
}
.operand-controls span:active{
	color: #eee;
	background-color: #ddd;
}
.operand-controls span:focus{
	box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.5);
}
.operand-edit-container .operand-controls span{
	margin-bottom: .5rem;
	color: #555;
	background-color: #eee;
}
.operand-edit-container .operand-controls span:hover{
	color: #555;
	background-color: #ddd;
}
.operand-edit-container .operand-controls span:active{
	color: #eee;
	background-color: #999;
}
input[type="checkbox"].edit-mode:checked ~ .done{
	color: #eee;
	background-color: #777;
}
input[type="checkbox"].edit-mode:checked ~ .done:hover{
	background-color: #555;
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
