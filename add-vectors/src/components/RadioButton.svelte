
<script lang="ts">

export let radioGroup = 0;
export let id = 0;
export let value = 0;
export let extraClasses = "";
const actualId = `${new Date().getTime()}-${id}`;
</script>


<!-- https://hackernoon.com/hacking-custom-radioes-and-radios-5d48230440d -->
<label for={`radio-input-${actualId}`} class={`radio-custom-container ${extraClasses}`}>
	<!-- Input element for the radio button -->
	<input type="radio" class="check-custom" id={`radio-input-${actualId}`} bind:group={radioGroup} {value}>
	
	<!-- Customization element for the radio -->
	<span class="check-toggle">
        <!-- {#if $$slots.icon} -->
        <slot name="icon"></slot>
        <!-- {:else} -->
        <!-- <i class="fas fa-plus" aria-hidden="true"></i> -->
        <!-- {/if} -->
    </span>

	<!-- Slot to support custom/optional text for the checked/unchecked state -->
	<slot></slot>
</label>




<style>
.radio-custom-container{
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
/* Styles for hiding the native radio */
input[type='radio'].check-custom {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

/* Styles for the basic appearance of the toggle switch */
input[type='radio'].check-custom ~ .check-toggle {
    width: 2rem;
    height: 2rem;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    align-items: center;
    line-height: 1.2;
    vertical-align: middle;
    cursor: pointer;
    background: #eee;
    background: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
}


/* Styles for the ::before pseudo-element of the toggle switch in hover state */
input[type='radio'].check-custom:hover ~ .check-toggle,
input[type='radio'].check-custom:checked:hover ~ .check-toggle {
    background: #ccc;
}

/* Styles for the ::before pseudo-element of the toggle switch in focus state */
input[type='radio'].check-custom:focus ~ .check-toggle {
    box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.5);
}

/* Styles for the ::before pseudo-element of the toggle switch in both focus and checked or enabled state */
input[type='radio'].check-custom:focus:checked ~ .check-toggle {
    box-shadow: 0 0 0 2px rgba(97, 191, 158, 0.5);
}

/* Styles for the ::before pseudo-element of the toggle switch in checked or enabled state */
input[type='radio'].check-custom:checked ~ .check-toggle {
    background: #ddd;
}

</style>