<script lang="ts">
import About from "./About.svelte";

export let isVisible = false;

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
const closeModal = () => dispatch('close');
</script>







<div class={`md-modal md-effect-12 ${isVisible ? 'md-show' : ''}`} id="modal-12">
    <div class="md-content">
        <h3>About</h3>
        <div>
            <About/>
            <button class="md-close" on:click={closeModal}>Close</button>
        </div>
    </div>
</div>
<div class="md-overlay" on:click={closeModal}></div><!-- the overlay element -->








<style>

.md-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 50%;
	max-width: 630px;
	min-width: 320px;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.md-show {
	visibility: visible;
}

.md-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgba(143,27,15,0.8);
	background: rgba(113, 113, 113, 0.8);
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show ~ .md-overlay {
	opacity: 1;
	visibility: visible;
}

/* Content styles */
.md-content {
	color: #fff;
	color: #333;
	background: #e74c3c;
	background: #dedede;
	position: relative;
	border-radius: 3px;
	margin: 0 auto;
}

.md-content h3 {
	margin: 0;
	padding: 0.4em;
	text-align: center;
	font-size: 2.4em;
	font-weight: 300;
	opacity: 0.8;
	background: rgba(0,0,0,0.1);
	border-radius: 3px 3px 0 0;
}

.md-content > div {
	padding: 15px 40px 30px;
	margin: 0;
	font-weight: 300;
	font-size: 1.15em;
}


.md-content button {
	display: block;
	margin: 0 auto;
	font-size: 0.8em;
}

/* Effect 12:  Just me */
.md-effect-12 .md-content {
	-webkit-transform: scale(0.8);
	-moz-transform: scale(0.8);
	-ms-transform: scale(0.8);
	transform: scale(0.8);
	opacity: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show.md-effect-12 ~ .md-overlay {
	background: #e74c3c;
	background: #dedede;
} 

.md-effect-12 .md-content h3,
.md-effect-12 .md-content {
	background: transparent;
}

.md-show.md-effect-12 .md-content {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}
.md-close{
	padding: .8rem 1rem;
	border-radius: 8px;
	min-width: 15rem;
	background: #333;
	color: #eee;
}
.md-close{
	margin-top: 5rem !important;
}
:global(.md-content p){
	margin-bottom: 1rem;
}
</style>