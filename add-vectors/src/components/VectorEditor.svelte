
<script lang="ts">
import Input from "./Input.svelte";


export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;


import type { TRepresentationLabels, TRepresentationValues } from "./Operands.types";
export let vector: TRepresentationValues;
export let labels: TRepresentationLabels;




import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

/**
 * Merges `vector` to the `keyValue` object. Every key from vector that is present in the new object 'keyValue' is updated to the value from this new object
 * @date 2021-06-13
 * @param {any} vector:TRepresentationValues
 * @param {any} keyValue:any
 * @returns {void}
 */
const onChangeHandler = (vector: TRepresentationValues, keyValue: any) => {

  // Find common keys between "vector" and "keyValue", overwrite the values in "vector" for those keys
  const updatedVector: TRepresentationValues = Object.keys(vector).reduce(
    (acc, key) => keyValue[key] ? {...acc, ...{[key]: keyValue[key]}} : acc, 
    vector
  );

  // Notifiy parent components of the change
  dispatch("change", updatedVector);
}

</script>




<div class="vector-editor">
  <Input label={labels.multiplier} placeholder={labels.multiplier} bind:value={vector.multiplier} id={`${actualId}-${labels.multiplier}`} on:input={ev => onChangeHandler(vector, {multiplier: parseFloat(ev.detail.target.value)})}/>
  <Input label={labels.component1} placeholder={labels.component1} bind:value={vector.component1} id={`${actualId}-${labels.component1}`} on:input={ev => onChangeHandler(vector, {component1: parseFloat(ev.detail.target.value)})}/>
  <div></div>
  <Input label={labels.component2} placeholder={labels.component2} bind:value={vector.component2} id={`${actualId}-${labels.component2}`} on:input={ev => onChangeHandler(vector, {component2: parseFloat(ev.detail.target.value)})}/>
</div>



