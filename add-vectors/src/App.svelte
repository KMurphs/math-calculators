<script lang="ts">

import Modal from "./components/Modal.svelte";
import About from "./components/About.svelte";
import TitleBar from "./components/TitleBar.svelte";
import MenuBar from "./components/MenuBar.svelte";

let isModalVisible = false;
const showInfoModal = () => isModalVisible = true;
const closeInfoModal = () => isModalVisible = false;

let doUsePolarForm = false;

const handleMenuAction = (action: string)=>{
	console.log(action)
}
</script>




<header>
	<TitleBar on:showInfo={showInfoModal}/>
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
		<MenuBar bind:usePolarForm={doUsePolarForm} on:selection={e => handleMenuAction(e.detail)}/>
	</div>
</main>




<footer class="footer">
	<About/>
</footer>

<Modal bind:isVisible={isModalVisible} on:close={closeInfoModal}/>



<style>

header{
	padding: .5rem 1rem;
	background: #333;
	color: #eee;
}

main{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1 1 50vh;
}








#canvas-container{
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
:global(.menu-items-container__inner){
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

	.footer{
		display: block;
	}
}












</style>