<script lang="ts">

import Modal from "./components/Modal.svelte";
import About from "./components/About.svelte";
import TitleBar from "./components/TitleBar.svelte";
import MenuBar from "./components/MenuBar.svelte";
import Operands from "./components/Operands.svelte";
import Results from "./components/Results.svelte";



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
	<div id="results-container" class="debug">
		<Results/>
	</div>

	<div id="inputs-container">
		<Operands/>
	</div>

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

#results-container{
	max-width: min(50vh, 100%);
	margin: 0 auto;
	padding: 1rem;
	overflow: auto;
}

#inputs-container{
	padding: 1rem;
	flex: 1 1 2rem;
	background: #fafafa;
	overflow-y: auto;
}

#inputs-container, 
:global(.menu-items-container__inner){
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
}

#menu-items-container{
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
	#results-container{
		flex: 0 0 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 500px;
		height: 100%;
		/* padding: 0 2rem; */
	}
	#results-container,
	#menu-items-container,
	#inputs-container{
		width: 50%;
	}
	#menu-items-container,
	#inputs-container{
		max-width: 500px;
	}
	#menu-items-container{
		margin: 0 auto;
	}
	.footer{
		display: block;
	}
}
</style>