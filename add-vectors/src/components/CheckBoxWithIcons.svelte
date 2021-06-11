
<script lang="ts">
export let checked = false;
export let extraClasses = "";

export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;


import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const onChangeHandler = (checked: boolean) => dispatch("change", checked);
</script>


<!-- https://hackernoon.com/hacking-custom-checkboxes-and-radios-5d48230440d -->
<label for={`checkbox-${actualId}`} class={`check-custom-container ${checked ? 'check-custom-container--true' : ''} ${extraClasses}`}>
	<!-- Input element for the checkbox -->
	<!-- Add a `toggle-switch` class to the input element -->
	<input type="checkbox" class="check-custom" id={`checkbox-${actualId}`} bind:checked={checked} on:input={ev => onChangeHandler(ev.currentTarget.checked)}>

	<!-- Slots to support custom/optional text for the checked/unchecked state -->
	<span class="true-details">
        <slot name="trueIcon">T</slot>
        {#if $$slots.trueText}    
            <slot name="trueText">True</slot>
        {/if}
    </span>
	<span class="false-details">
        <slot name="falseIcon">F</slot>
        {#if $$slots.falseText}    
            <slot name="falseText">False</slot>
        {/if}
    </span>


</label>




<style>
.check-custom-container{
    display: inline-grid;
    grid-template: 1fr / 1fr;
    width: max-content;
    cursor: pointer;
    padding: 2px;
    --true-font-color: #38856a;
    --true-focus-color: #61bf9e80;
    --true-border-color: #61bf9e;
    --false-font-color: #555;
    --false-focus-color: #1785ff80;
    --false-border-color: #eee;   
}
/* Styles for hiding the native checkbox */
input[type='checkbox'].check-custom {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.true-details,
.false-details{
	display: inline-flex;
	justify-content: center;
	align-items: center;
    border: 1px solid #eee;
    color: #555;
    border-color: var(--false-border-color);
    color: var(--false-font-color);
    min-width: 2rem;
    min-height: 2rem;
}

.true-details{
    border-color: #61bf9e;
    color: #38856a;
    border-color: var(--true-border-color);
    color: var(--true-font-color);
}





input[type="checkbox"].check-custom:focus ~ .false-details{ box-shadow: 0 0 0 2px #1785ff80; }
input[type="checkbox"].check-custom:focus ~ .true-details{ box-shadow: 0 0 0 2px #61bf9e80; }
input[type="checkbox"].check-custom:focus ~ .false-details{ box-shadow: 0 0 0 2px var(--false-focus-color); }
input[type="checkbox"].check-custom:focus ~ .true-details{ box-shadow: 0 0 0 2px var(--true-focus-color); }


input[type="checkbox"].check-custom ~ .false-details{ display: inline-flex; }
input[type="checkbox"].check-custom ~ .true-details{ display: none; }
input[type="checkbox"].check-custom:checked ~ .false-details{ display: none; }
input[type="checkbox"].check-custom:checked ~ .true-details{ display: inline-flex; }
</style>