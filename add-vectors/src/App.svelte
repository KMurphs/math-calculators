<script lang="ts">

import Modal from "./components/Modal.svelte";
import About from "./components/About.svelte";
import TitleBar from "./components/TitleBar.svelte";
import MenuBar from "./components/MenuBar.svelte";
import Operands from "./components/Operands.svelte";
import Results from "./components/Results.svelte";
import VectorCanvas from "./components/VectorCanvas.svelte";
import { buildOperand, operandComponentsRepresentationProxyHOF, operandToVector, sumOperands } from "./components/Operands.utils";
import { texFromCartesianVector, texFromPolarVector } from "./utils/mathjax.utils";
import { toCartesian, toPolar } from "./utils/vector.utils";
import { getBulkVectorsDrawer as _getBulkVectorsDrawer } from "./utils/canvas.utils";
import type { TComponentRepresentationHandlers, TOperands, TRepresentationLabels, TRepresentationValues } from "./components/Operands.types";
import type { TCartesianVector } from "./utils/vector.types";
import Input from "./components/Input.svelte";
import CheckBoxWithIcons from "./components/CheckBoxWithIcons.svelte";
import { areNumericObjectsEqual } from "./utils/math.utils";


let operands: TOperands = [{
    isAddedToPrevious: true,
	scalarMultiplier: 1,
	xComponent: 1.235,
	yComponent: 12.345
},{
    isAddedToPrevious: true,
	scalarMultiplier: 1,
	xComponent: 1.235,
	yComponent: 12.345
},{
    isAddedToPrevious: true,
	scalarMultiplier: 1,
	xComponent: 1.235,
	yComponent: 12.345
},{
    isAddedToPrevious: true,
	scalarMultiplier: 1,
	xComponent: 1.235,
	yComponent: 12.345
}];
$: vectors = operands.map(operandToVector);


let resultant: TCartesianVector = {x: 0, y: 0};
$: resultant = operands.reduce(sumOperands, {x: 0, y: 0});


let isModalVisible = false;
const showInfoModal = () => isModalVisible = true;
const closeInfoModal = () => isModalVisible = false;




let doUsePolarForm = false;

/** Canvas Logic */
$: getDrawerForCurrentRepresentation = _getBulkVectorsDrawer.bind(null, doUsePolarForm);

/** Tex Logic */
const _vectorToTex = (usePolarForm: boolean, vector: TCartesianVector) => {
    if(!vector) return "";

	if(!usePolarForm) return texFromCartesianVector(vector.x, vector.y);
    const polar = toPolar({x: vector.x, y: vector.y});
    return texFromPolarVector(polar.radius, polar.degreeAngle);
};
$: vectorRepresentationToTex = _vectorToTex.bind(null, doUsePolarForm);

/** Operand Editor Logic*/
$: operandEditorProxy = operandComponentsRepresentationProxyHOF(
	doUsePolarForm, 
	index => operands[index], 
	(newOperandValue, newOperandIndex) => operands = operands.map((op, idx) => idx !== newOperandIndex ? op : newOperandValue)
);



const handleMenuAction = (action: string)=>{
	if(action == 'reset') { operands = []; resultant = {x: 0, y: 0}; return; }
	if(action == 'new-session') { operands = [buildOperand(resultant.x, resultant.y)]; resultant = {x: 0, y: 0};  return; }
	if(action == 'new-operand') { operands = [...operands, buildOperand()]; resultant = {x: 0, y: 0};  return; }
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


	<div id="inputs-container">
		<Operands bind:editorProxy={operandEditorProxy} vectorToTex={vectorRepresentationToTex} data={operands}  />
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
	width: 100%;
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
		min-width: 320px;
	}
	#menu-items-container{
		margin: 0 auto;
	}
	.footer{
		display: block;
	}
}
</style>