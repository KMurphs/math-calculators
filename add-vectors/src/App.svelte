<script lang="ts">
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
</script>


<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrer-policy="no-referrer" />
	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"> -->
	<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js" on:load={initializeRemarkable}></script> -->
</svelte:head>
<header>
	<h1> 
		<span class="title">
			<a href="/" class="icon"><i class="fas fa-subscript"></i></a> 
			<span>Add Vectors</span>
		</span>
		<button class="btn-info"><i class="fas fa-info" aria-hidden="true"></i></button>
	</h1>
</header>
<main>
	<div id="canvas-container" class="debug">
		<canvas id="myCanvas" width="500" height="500" class="hidden-"
				style="">
			Your browser does not support the canvas element.
		</canvas>
		
		<div id="resultant" style="">
			{`\\(\\overrightarrow{R}\\) = \\(\\sum_{i}\\vec{V_i}\\) = 1.234 \\(\\overrightarrow{e_x}\\) + 2536 \\(\\overrightarrow{e_y}\\) = 1.234 ∠ 2536°`}
			<!-- {`\\(\\vec x\\)  and \\(\\overrightarrow{e_x}\\)  and \\(\\overrightarrow{R}\\) and \\(\\overrightarrow{x_1y^2}\\)`} -->
		</div>
	</div>

	<div id="input-container">C</div>

	<div id="menu-items-container">
		<div class="menu-items-container__inner">
			<label for="vector-representation" class="inline-block menu-item">
				<input type="checkbox" id="vector-representation">
				<span class="cartesian">{`(\\(x, y\\))`}</span>
				<span class="polar">{`(\\(\\rho, \\alpha °\\))`}</span>
			</label>
			<ul class="reset flex">
				<li><button class="menu-item"><i class="fas fa-recycle" aria-hidden="true"></i><span>Reuse</span></button></li>
				<!-- <li><button class="menu-item"><i class="fas fa-trash-alt" aria-hidden="true"></i></button></li> -->
				<li><button class="menu-item"><i class="far fa-trash-alt" aria-hidden="true"></i><span>Reset</span></button></li>
				<li><button class="menu-item"><i class="fas fa-plus" aria-hidden="true"></i><span>New</span> </button></li>
			</ul>
		</div>
	</div>
</main>
<p class="footer">
	"Add Vectors" Application written by Stephan K.<br>
	To get in touch, find me on Twitter <a href="https://twitter.com/Murphs_K" rel="noopener noreferrer" target="_blank">@Murphs_K</a>, on Github <a href="https://github.com/KMurphs" rel="noopener noreferrer" target="_blank">KMurphs</a><br>

	© 2021 Stephane K.  All rights reserved
</p>


<style>
:global(body),
:global(body *) {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
:global(body) {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100vh;
	height: calc(var(--vh, 1vh) * 100);
}
:global(.inline-block) {
	display: inline-block;
}
:global(.debug-) {
	border: 1px solid #999;
}
:global(.flex) {
	display: flex;
}
:global(.hidden) {
	display: none !important;
}
:global(ul.reset),
:global(ul.reset li),
:global(ul.reset ul li) {
   margin:0;
   padding: 0;
   text-indent: 0;
   list-style-type: none;
}


header{
	padding: .5rem 1rem;
	background: #333;
	color: #eee;
}
header h1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    font-size: 1.5rem;
}
header .title{
    display: inline-flex;
    align-items: baseline;
}
header .icon{
    width: 2.2rem;
    height: 2.2rem;
    background: #eee;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.2rem;
    padding-left: 0.2rem;
    margin-right: 1rem;
    color: #333;
}
header .btn-info{
    font-size: .8rem;
    height: 30px;
    width: 30px;
    border: none;
    background: rgba(0,0,0,.1);
    color: #999;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
main{
	/* width: 100%; */
	/* max-width: 500px; */
	/* margin: 0 auto; */
	/* padding: 1rem; */
	/* padding-bottom: 0; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* height: 100vh; */
	/* height: calc(var(--vh, 1vh) * 100); */
	flex: 1 1 50vh;
}
#canvas-container{
	/* min-height: 5rem; */
	/* background: #eee; */
	/* display: flex; */
	/* flex-direction: column; */
	/* justify-content: center; */
	max-width: min(50vh, 100%);
	margin: 0 auto;
	padding: 1rem;
	overflow: auto;
}
#canvas-container canvas{
	border: 1px solid #c3c3c3; 
	max-width: 100%; 
	margin: 0 auto; 
	background: #eee; 
	display: block;
}
#canvas-container canvas{
	margin-bottom: .5rem;
}
#canvas-container #resultant{
	margin: 0 auto;
}





#input-container{
	padding: 1rem;
	flex: 1 1 2rem;
	background: #fafafa;
	overflow-y: auto;
}


#input-container, 
.menu-items-container__inner{
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
}


#menu-items-container{
	/* max-width: min(50vh, 100%); */
	/* margin: 0 auto; */
	/* width: 100%; */
	background: #f5f5f5;
	padding: 0 1rem;
}
.menu-items-container__inner{
	display: flex;
	justify-content: space-between;
	background: #f5f5f5;
}
.menu-item{
	/* padding: .7rem .8rem; */
	background: none;
	border: none;
	height: 50px;
	padding: .5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu-item:focus{
	outline: 2px solid #aaa;
	/* border-top: 2px solid #aaa; */
}
.menu-item:hover,
.menu-item:active {
  background-color: #ddd;
  border-color: #ddd;
  /* color: #eee; */
}
button.menu-item{
	font-size: 1.2rem;
	width: 50px;
}
button.menu-item span{
	display: none;
}
.menu-item span{
	margin-left: .5rem;
}







.footer{
	display: none;
	font-size: .8rem;
	width: 40vw;
	line-height: 1.6;
	text-align: center;
	width: 100%;
	padding: 2rem 0;
}



@media screen and (min-width: 640px) {
	main{
		flex-wrap: wrap;
		max-width: 100%;
		padding: 1rem 3rem;
	}
	#canvas-container{
		flex: 0 0 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 500px;
		height: 100%;
		/* padding: 0 2rem; */
	}
	#canvas-container,
	#menu-items-container,
	#input-container{
		width: 50%;
		/* padding: 0 2rem; */
		/* max-width: 50vw; */
		/* max-width: 500px; */
		/* max-width: calc(50vw - 4rem); */
	}
	#menu-items-container,
	#input-container{
		/* padding: 0 2rem; */
		/* max-width: 50vw; */
		max-width: 500px;
		/* max-width: calc(50vw - 4rem); */
	}
	#menu-items-container{
		margin: 0 auto;
		/* background: none; */
	}
	label.menu-item{
		padding: .5rem 1rem;
	}

	.footer{
		display: block;
	}
	header .btn-info{
		display: none;
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

#vector-representation ~ .cartesian{display: inline-block;}
#vector-representation ~ .polar{display: none;}
#vector-representation:checked ~ .cartesian{display: none;}
#vector-representation:checked ~ .polar{display: inline-block;}
</style>