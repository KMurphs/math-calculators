<script lang="ts">
import { tick } from "svelte";
import Modal from "./components/Modal.svelte";
import About from "./components/About.svelte";
import TitleBar from "./components/TitleBar.svelte";
import MenuBar from "./components/MenuBar.svelte";
import Operands from "./components/Operands.svelte";
import Results from "./components/Results.svelte";
import VectorCanvas from "./components/VectorCanvas.svelte";
import { operandFromVector, operandEditorProxyHOF, operandToVector, sumOperands } from "./components/Operands.utils";
import { getBulkVectorsDrawer as _getBulkVectorsDrawer } from "./utils/canvas.utils";
import { scrollToBottom, vectorToTex } from "./App.utils";
import type { TOperands} from "./components/Operands.types";
import type { TCartesianVector } from "./utils/vector.types";

/** Compute Resultant logic*/
let operands: TOperands = [];
$: vectors = operands.map(operandToVector);

let resultant: TCartesianVector = {x: 0, y: 0};
$: resultant = operands.reduce(sumOperands, {x: 0, y: 0});




/** Modal Logic*/
let isModalVisible = false;
const showInfoModal = () => isModalVisible = true;
const closeInfoModal = () => isModalVisible = false;




let doUsePolarForm = false;

/** Canvas Logic */
$: getDrawerForCurrentRepresentation = _getBulkVectorsDrawer.bind(null, doUsePolarForm);


/** Tex Logic */
$: vectorRepresentationToTex = vectorToTex.bind(null, doUsePolarForm);


/** Operand Editor Logic*/
$: operandEditorProxy = operandEditorProxyHOF(
	doUsePolarForm, 
	indexToGet => operands[indexToGet], 
	(newOperandValue, newOperandIndex) => operands = operands.map((op, idx) => idx !== newOperandIndex ? op : newOperandValue),
	indexToDelete =>  operands = operands.filter((op, idx) => idx !== indexToDelete)
);


/** Menu Action Handlers*/
let operandsContainer: HTMLElement = null;
const handleMenuAction = (action: string)=>{
	if(action == 'reset') { operands = []; resultant = {x: 0, y: 0}; return; }
	if(action == 'new-session') { operands = [operandFromVector(resultant.x, resultant.y)]; resultant = {x: 0, y: 0};  return; }
	if(action == 'new-operand') { operands = [...operands, operandFromVector()]; resultant = {x: 0, y: 0}; tick().then(()=> scrollToBottom(operandsContainer)); return; }
}
</script>




<header>
	<TitleBar on:showInfo={showInfoModal}/>
</header>

<main>
	<div id="results-container" class="debug">
		<Results vectorToTex={vectorRepresentationToTex} {resultant}  >
			<VectorCanvas slot="canvas" {vectors} {resultant} getBulkDrawer={getDrawerForCurrentRepresentation}/> 
		</Results>
	</div>


	<div id="inputs-container" bind:this={operandsContainer}>
		<Operands bind:editorProxy={operandEditorProxy} vectorToTex={vectorRepresentationToTex} data={operands} on:newOperand={()=>handleMenuAction("new-operand")} />
	</div>
	<div id="menu-items-container">
		<MenuBar  bind:usePolarForm={doUsePolarForm} on:selection={e => handleMenuAction(e.detail)}/>
	</div>
</main>

<footer class="footer">
	<About/>
</footer>

<Modal bind:isVisible={isModalVisible} on:close={closeInfoModal}/>





<style>
/** Global styles */
:global(:root){
	--color-primary-lighter: #fafafa;
	--color-primary-light: #eee;
	--color-primary-light2: #ccc;
	--color-primary-gray: #999;
	--color-primary-dark: #333;
	--color-secondary-lighter: #d9f6ff;
	--color-secondary-light: #a3eaff;
	--color-secondary: #24a5cc;
	--color-secondary-dark: rgb(0, 97, 127);
	--color-secondary-darker: #004e66;
	--color-accent-lighter: #ffdbf9;
	--color-accent-lighter3: #fff5fd;
	--color-accent-lighter2: #ffc5f5;
	--color-accent-light: #fdbcf2;
	--color-accent: #b1289a;
	--color-accent-dark: #5A0B4D;
}




/** Main Sections layout styles + responsiveness */
header{
	padding: .5rem 1rem;
	background: #333;
	background: var(--color-secondary-dark);
	color: #eee;
	color: var(--color-secondary-light);
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
	width: 100%;
}

#inputs-container{
	padding: 1rem;
	flex: 1 1 2rem;
	background: #fafafa;
	background: var(--color-primary-lighter);
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
	background: var(--color-secondary-dark);
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
	}
	#results-container,
	#menu-items-container,
	#inputs-container{
		width: 50%;
	}
	#menu-items-container,
	#inputs-container{
		max-width: 500px;
		min-width: 320px;
	}
	#menu-items-container{
		margin: 0 auto;
	}
	.footer{
		display: block;
		margin: 0 auto;
		max-width: min(60vw, 500px);
	}
}
</style>