
<script lang="ts">
import CheckBox from "./CheckBoxToggleSwitch.svelte";
export let usePolarForm = false;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const onSelection = (action: string) => dispatch("selection", action);
const onNewSession = ()=>onSelection("new-session");
const onNewOperand = ()=>onSelection("new-operand");
const onReset = ()=>onSelection("reset");

</script>

<div class="menu-items-container__inner">


	<CheckBox bind:checked={usePolarForm} extraClasses={"inline-block menu-item"}>
		<span class="cartesian">{`(\\(x, y\\))`}</span>
		<span class="polar">{`(\\(\\rho, \\alpha °\\))`}</span>
	</CheckBox>


	<ul class="reset flex">
		<li><button class="menu-item" on:click={onNewSession}><i class="fas fa-recycle" aria-hidden="true"></i><span>Reuse</span></button></li>
		<li><button class="menu-item" on:click={onReset}><i class="far fa-trash-alt" aria-hidden="true"></i><span>Reset</span></button></li>
		<li><button class="menu-item" on:click={onNewOperand}><i class="fas fa-plus" aria-hidden="true"></i><span>New</span> </button></li>
	</ul>
</div>


<style>
.menu-items-container__inner{
	display: flex;
	justify-content: space-between;
	background: #f5f5f5;
	background: var(--color-secondary-dark);
	color: var(--color-primary-light);
	overflow-y: hidden;
}
.menu-item{
	background: none;
	border: none;
	height: 50px;
	padding: .5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu-item:focus{
	border-top: 2px solid #aaa;
	border-top: 4px solid var(--color-secondary);
}
.menu-item:hover,
.menu-item:active {
  background-color: #ddd;
  background-color: rgba(0,0,0,0.2);
}
button.menu-item{
	font-size: 1.2rem;
	width: 50px;
	color: var(--color-primary-light);
}
button.menu-item span{
	display: none;
}
.menu-item span{
	margin-left: .5rem;
}





@media screen and (min-width: 640px) {
	:global(label.menu-item){
		padding: .5rem 1rem;
	}
}
@media screen and (min-width: 900px) {
	button.menu-item{
		width: auto;
	}
	button.menu-item span{
		display: inline-block;
		margin-left: .5rem;
	}
}
@media screen and (min-width: 1024px) {
	button.menu-item{
		padding-left: 1rem;
		padding-right: 1rem;
	}
}
:global(label.menu-item){
	padding: 0 1rem;
	transform: scale(1.2, 1.2);
}
:global(#vector-representation ~ .cartesian),
:global(#vector-representation ~ .polar){margin-left: .5rem;}
:global(#vector-representation ~ .cartesian){display: inline-block;}
:global(#vector-representation ~ .polar){display: none;}
:global(#vector-representation:checked ~ .cartesian){display: none;}
:global(#vector-representation:checked ~ .polar){display: inline-block;}
</style>