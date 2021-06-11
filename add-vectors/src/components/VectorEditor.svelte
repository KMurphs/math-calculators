
<script lang="ts">
import Input from "./Input.svelte";


export let id = 0;
const actualId = `${new Date().getTime()}-${id}`;




import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

import type { TRepresentationLabels, TRepresentationValues } from "./Operands.types";
export let vector: TRepresentationValues;
export let labels: TRepresentationLabels;

const onChangeHandler = (vector: TRepresentationValues, keyValue: any) => {
  const updatedVector: TRepresentationValues = Object.keys(vector).reduce(
    (acc, key) => keyValue[key] ? {...acc, ...{[key]: keyValue[key]}} : acc, 
    vector
  );
  dispatch("change", updatedVector);
}

</script>




<div class="vector-editor">
  <Input label={labels.multiplier} placeholder={labels.multiplier} bind:value={vector.multiplier} id={`${actualId}-${labels.multiplier}`} on:input={ev => onChangeHandler(vector, {multiplier: parseFloat(ev.detail.target.value)})}/>
  <Input label={labels.component1} placeholder={labels.component1} bind:value={vector.component1} id={`${actualId}-${labels.component1}`} on:input={ev => onChangeHandler(vector, {component1: parseFloat(ev.detail.target.value)})}/>
  <div></div>
  <Input label={labels.component2} placeholder={labels.component2} bind:value={vector.component2} id={`${actualId}-${labels.component2}`} on:input={ev => onChangeHandler(vector, {component2: parseFloat(ev.detail.target.value)})}/>
</div>



