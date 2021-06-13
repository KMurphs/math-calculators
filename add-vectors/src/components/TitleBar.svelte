

<script>
	const injectVHInCSS = ()=>{
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	// Run it on load
	injectVHInCSS();
	// Run it on resize
	window.addEventListener('resize', injectVHInCSS);


	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const showInfoModal = () => dispatch('showInfo');
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrer-policy="no-referrer" />
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"> -->
	<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js" on:load={initializeRemarkable}></script> -->
</svelte:head>

<h1> 
	<span class="title">
		<a href="/" class="icon"><i class="fas fa-subscript"></i></a> 
		<span>Add Vectors</span>
	</span>
	<button class="btn-info" on:click={showInfoModal}><i class="fas fa-info" aria-hidden="true"></i></button>
</h1>


<style>

h1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    font-size: 1.5rem;
}
.title{
    display: inline-flex;
    align-items: baseline;
}
.icon{
    width: 2.2rem;
    height: 2.2rem;
    /* background: #eee; */
    background-color: var(--color-secondary-dark);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.5rem;
    padding-left: 0.2rem;
    margin-right: 1rem;
    color: #333;
    color: var(--color-secondary-light);
}
.icon:hover{
    text-decoration: none; 
    background-color: rgba(0,0,0,0.1);
}
.btn-info{
    font-size: .8rem;
    height: 30px;
    width: 30px;
    border: none;
    background: rgba(0,0,0,.1);
    color: #999;
    color: var(--color-secondary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (min-width: 640px) {
	.btn-info{
		display: none;
	}
}
</style>