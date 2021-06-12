
<script lang="ts">
export let id = "";
const actualId = `${new Date().getTime()}-${id}`;

export let label = "My Input";
export let placeholder = "My Input";
export let value = 0;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const onInput = (ev)=>dispatch("input", ev);



</script>

<div class="input-group">      
    <input type="number" bind:value={value} required id={actualId} {placeholder} on:input={onInput}>
    <span class="highlight"></span>
    <label for={actualId}>{label}</label>
</div>



<style>
.input-group{
  width: 100%;
  margin-bottom: 1.5rem;
  /* margin-bottom: 1.2rem; */
  position: relative;
  /* border-bottom: 1px solid red; */
}
input 				{
  /* font-size:18px; */
  padding: 0 .5rem .1rem .3rem;
  display: block;
  width: 100%;
  border: none;
  font-size: 1rem;
  background: rgba(0,0,0,0.04);
  /* border-bottom: 1px solid #757575; */
}
input:focus 		{ outline:none; }

input:focus::-webkit-input-placeholder {/* Chrome/Opera/Safari/Edge */ font-style: italic; }
input:focus::-ms-input-placeholder { /* Microsoft Edge */ font-style: italic; }
input:focus:-ms-input-placeholder {/* IE 10+ */ font-style: italic; }
input:focus::-moz-placeholder {/* Firefox 19+ */ font-style: italic; }
input:focus:-moz-placeholder {/* Firefox 18- */ font-style: italic; }
input:focus::placeholder { font-style: italic; }

label{
  position: absolute;
  font-size: .7rem;
  bottom: -1rem;
  padding-left: .3rem;
  font-style: italic;
  width: 100%;
}
label::before,
label::after{
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  content: "";
  height: 1px;
  background-color: #bbb;
  background-color: var(--color-secondary-dark);
  display: block;
  position: absolute;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
label::after	{
  transform: scaleX(0);
  background-color: #777;
  background-color: var(--color-secondary);
}
/* active state */
/* input:focus ~ label, input:valid ~ label 		{ */
input:focus ~ label{
  font-weight: bold;
}
input:focus ~ label::after, input:valid ~ label::after 		{
  transform: scaleX(1);
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:80%; 
  width:50%; 
  bottom:.3rem; 
  left:.3rem;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background: var(--color-accent-dark);  }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background: var(--color-accent-dark);; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background: var(--color-accent-dark);; }
  to 	{ width:0; background:transparent; }
}
</style>