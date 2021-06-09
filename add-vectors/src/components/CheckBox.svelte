
<script lang="ts">
export let checked = false;
export let extraClasses = "";
</script>



<label for="vector-representation" class={`check-custom-container ${extraClasses}`}>
	<!-- Input element for the checkbox -->
	<!-- Add a `toggle-switch` class to the input element -->
	<input type="checkbox" class="check-custom toggle-switch" id="vector-representation" bind:checked={checked}>
	
	<!-- Customization element for the checkbox -->
	<span class="check-toggle"></span>
	<slot></slot>
</label>




<style>
.check-custom-container{
	display: inline-flex;
	justify-content: center;
	align-items: center;
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

/* Styles for the basic appearance of the toggle switch */
input[type='checkbox'].check-custom.toggle-switch ~ .check-toggle {
    width: 1.5rem;
    height: 1rem;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

/* Common styles for the ::before and ::after pseudo-elements of the toggle switch */
input[type='checkbox'].check-custom.toggle-switch ~ .check-toggle::before,
input[type='checkbox'].check-custom.toggle-switch ~ .check-toggle::after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
}

/* Styles for the ::before pseudo-element (the outer frame) of the toggle switch */
input[type='checkbox'].check-custom.toggle-switch ~ .check-toggle::before {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background: #dbdbdb;
}

/* Styles for the ::after pseudo-element (the inner slider) of the toggle switch */
input[type='checkbox'].check-custom.toggle-switch ~ .check-toggle::after {
    width: 0.75rem;
    height: 0.75rem;
    margin: 0.125rem;
    border-radius: 50%;
    background: #ffffff;
    transition: all .3s;
}

/* Styles for the ::before pseudo-element of the toggle switch in hover state */
input[type='checkbox'].check-custom.toggle-switch:hover ~ .check-toggle::before {
    background: #c4c4c4;
}

/* Styles for the ::before pseudo-element of the toggle switch in focus state */
input[type='checkbox'].check-custom.toggle-switch:focus ~ .check-toggle::before {
    box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.5);
}

/* Styles for the ::before pseudo-element of the toggle switch in both focus and checked or enabled state */
input[type='checkbox'].check-custom.toggle-switch:focus:checked ~ .check-toggle::before {
    box-shadow: 0 0 0 2px rgba(97, 191, 158, 0.5);
}

/* Styles for the ::before pseudo-element of the toggle switch in checked or enabled state */
input[type='checkbox'].check-custom.toggle-switch:checked ~ .check-toggle::before {
    background: #61bf9e;
}

/* Styles for the ::after pseudo-element of the toggle switch in checked or enabled state */
input[type='checkbox'].check-custom.toggle-switch:checked ~ .check-toggle::after {
    /*   left: auto; */
    /*   right: 0; */
    left: 7px;
}
</style>