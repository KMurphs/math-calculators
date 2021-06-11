import { toCartesian, toPolar } from "./vector.utils";
import type { TCartesianVector, TPolarVector } from "./vector.types";
import type { TCanvasParameters } from "./canvas.types";



const strokeNormalColor = "#000";
const strokeAccentColor = "#f00";
const DECIMAL_PLACES = 2;
const formatNumber = (num: number) => num.toFixed(DECIMAL_PLACES);


function clearCanvas({node, context}: TCanvasParameters){
    if(!context || !node) return;
    _clearCanvas(context, node.width, node.height);
}
function _clearCanvas(context: any, canvasWidth: number, canvasHeight: number){
    if(!context) return;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}
function drawCanvasAxis({node, context, xCenter, yCenter}: TCanvasParameters){
    if(!node) return;
    _drawCanvasAxis(context, xCenter, yCenter, node.width, node.height);
}
function _drawCanvasAxis(context: any, xCenter: number, yCenter: number, canvasWidth: number, canvasHeight: number){
    if(!context || !canvasWidth || !canvasHeight) return;
    if(!xCenter) xCenter = canvasWidth / 2;
    if(!yCenter) yCenter = canvasHeight / 2;
    
    context.lineWidth = .2;
    context.setLineDash([5,6]);
    context.strokeStyle = strokeNormalColor;

    context.beginPath();
    context.moveTo(0, yCenter);
    context.lineTo(canvasWidth, yCenter);
    context.stroke();

    context.beginPath();
    context.moveTo(xCenter, 0);
    context.lineTo(xCenter, canvasHeight);
    context.stroke();

    context.setLineDash([5, 0]);
};
function addCoordinates(context: any, text: string, xCoord: number, yCoord: number, isInUpPlane = true, isInRightPlane = true){
    if(!context || !text) return;
    if(!xCoord) xCoord = 0;
    if(!yCoord) yCoord = 0;

    const margin = 12;
    context.font = `${margin - 2}px Arial`;
    context.textAlign = "center";
    context.fillText(text, xCoord + margin * (isInUpPlane ? 1 : -1), yCoord + margin * (isInRightPlane ? 1 : -1)); 
}
function drawCanvasArrow(context: any, fromx: number, fromy: number, tox: number, toy: number) {
    if(!context || !fromx || !fromy || !tox || !toy) return;
    if(tox == fromx && toy == fromy) return;

    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);

    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}








function drawPolarVector(canvasData: TCanvasParameters, length: number, degreeAngleToHorizontal: number, doAddCoords = false){
    const cartesianVector = toCartesian({radius: length, degreeAngle: degreeAngleToHorizontal});
    drawCartesianVector(canvasData, cartesianVector.x, cartesianVector.y, doAddCoords, `${formatNumber(length)} ∠ ${formatNumber(degreeAngleToHorizontal)}°`);
}
function drawCartesianVector(canvasData: TCanvasParameters, xComponent: number, yComponent: number, doAddCoords = false, label?: string){
    if(xComponent == 0 && yComponent == 0) return;
    drawCanvasArrow(canvasData.context, canvasData.xCenter, canvasData.yCenter, canvasData.xCenter + canvasData.xUnit * xComponent, canvasData.yCenter - canvasData.yUnit * yComponent);
    if(doAddCoords) addCoordinates(canvasData.context, label ? label : `(${formatNumber(xComponent)}, ${formatNumber(yComponent)})`, canvasData.xCenter + canvasData.xUnit * xComponent, canvasData.yCenter - canvasData.yUnit * yComponent, xComponent > 0, yComponent < 0);
}
// function drawVectors(canvasData: TCanvasParameters, cartesianVectors: TCartesianVector[], polarVectors: TPolarVector[], willDrawResultant = false){
//     if(!canvasData.canvas || !canvasData.context) return;

//     canvasData.context.lineWidth = 1;
//     canvasData.context.strokeStyle = willDrawResultant ? strokeAccentColor : strokeNormalColor;
//     canvasData.context.beginPath();

//     cartesianVectors && cartesianVectors.forEach((vector) => drawCartesianVector(canvasData, vector.x, vector.y, true));
//     polarVectors && polarVectors.forEach((vector) => drawPolarVector(canvasData, vector.radius, vector.degreeAngle, true));

//     canvasData.context.stroke();
//     // canvasData.context.strokeStyle = strokeNormalColor;
// }
function drawVector(usePolarForm:boolean, canvasData: TCanvasParameters, xComponent: number, yComponent: number, doAddCoords = false, label?: string){
    if(!usePolarForm) return drawCartesianVector(canvasData, xComponent, yComponent, doAddCoords, label);
    const polar = toPolar({x: xComponent, y: yComponent});
    return drawPolarVector(canvasData, polar.radius, polar.degreeAngle, doAddCoords);
};
function getBulkVectorsDrawer(usePolarForm: boolean, canvasData: TCanvasParameters){

    const drawFunction = drawVector.bind(null, usePolarForm);

    return (vectorsToDraw: TCartesianVector[], penColor: string = "#000")=>{
        canvasData.context.lineWidth = 1;
        canvasData.context.strokeStyle = penColor;
        canvasData.context.beginPath();

        vectorsToDraw.forEach((vector) => drawFunction(canvasData, vector.x, vector.y, true));
        
        canvasData.context.stroke();
        // console.log("Finished drawing");
        // canvasData.context.strokeStyle = strokeNormalColor;
    }
}


const getUnit = (canvasWidth: number, arr: TCartesianVector[])=> (!arr ? 10 : 0.4 * canvasWidth / arr.reduce((acc, item) => Math.max(acc, item.x, item.y), 1));
const buildCanvasData = (canvasNode: HTMLCanvasElement, unit: number, dimension: number): TCanvasParameters=>({
    node: canvasNode,
    context: canvasNode.getContext("2d"),
    xCenter: dimension / 2, 
    yCenter: dimension / 2,  
    xUnit: unit,  
    yUnit: unit
})


export { drawCanvasAxis, clearCanvas, drawCartesianVector, drawPolarVector, getBulkVectorsDrawer, getUnit, buildCanvasData };









// context.lineWidth = 1;
// context.setLineDash([5, 0]);
// context.beginPath();
// cartesianVector(context, 20, 10, true);
// cartesianVector(context, 20, 20, true);
// cartesianVector(context, -20, -10, true);
// cartesianVector(context, -20, -20, true);
// cartesianVector(context, 20, -10, true);
// cartesianVector(context, 20, -20, true);
// cartesianVector(context, -20, 10, true);
// cartesianVector(context, -20, 20, true);
// polarVector(context, 20, 60, true);
// polarVector(context, 20, 120, true);
// polarVector(context, 20, -60, true);
// polarVector(context, 20, -120, true);
// context.stroke();