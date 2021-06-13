import { toCartesian, toPolar } from "./vector.utils";
import type { TCartesianVector, TPolarVector } from "./vector.types";
import type { TCanvasParameters } from "./canvas.types";



const strokeNormalColor = "#000";
const strokeAccentColor = "#f00";
const DECIMAL_PLACES = 2;
/**
 * For display purposes, limits the number of decimal places
 * @date 2021-06-13
 * @param {number} num:number
 * @returns {string}
 */
const formatNumber = (num: number) => num.toFixed(DECIMAL_PLACES);





/**
 * Wrapper for clearing canvas
 * @date 2021-06-13
 * @param {TCanvasParameters} data
 * @returns {void}
 */
function clearCanvas({node, context}: TCanvasParameters){
    if(!context || !node) return;
    _clearCanvas(context, node.width, node.height);
}
/**
 * Clears the canvas by clearing a rectangle that spreads throughout the canvas's entire size
 * @date 2021-06-13
 * @param {CanvasRenderingContext2D} context: canvas object for rendering 2D drawings
 * @param {number} canvasWidth:number
 * @param {number} canvasHeight:number
 * @returns {void}
 */
function _clearCanvas(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number){
    if(!context) return;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
}








/**
 * Wrapper for drawing axises on the canvas object 
 * @date 2021-06-13
 * @param {TCanvasParameters} data:TCanvasParameters
 * @returns {void}
 */
function drawCanvasAxis({node, context, xCenter, yCenter}: TCanvasParameters){
    if(!node) return;
    _drawCanvasAxis(context, xCenter, yCenter, node.width, node.height);
}
/**
 * Draws x and y axises passing through center at (xCenter, yCenter), spanning entire canvas width and height
 * @date 2021-06-13
 * @param {CanvasRenderingContext2D} context:any
 * @param {number} xCenter:number
 * @param {number} yCenter:number
 * @param {number} canvasWidth:number
 * @param {number} canvasHeight:number
 * @returns {void}
 */
function _drawCanvasAxis(context: CanvasRenderingContext2D, xCenter: number, yCenter: number, canvasWidth: number, canvasHeight: number){
    if(!context || !canvasWidth || !canvasHeight) return;
    if(!xCenter) xCenter = canvasWidth / 2;
    if(!yCenter) yCenter = canvasHeight / 2;
    
    // Prepare drawing pen
    context.lineWidth = .2;
    context.setLineDash([5,6]);
    context.strokeStyle = strokeNormalColor;

    // Draw horizontal line
    context.beginPath();
    context.moveTo(0, yCenter);
    context.lineTo(canvasWidth, yCenter);
    context.stroke();

    // Draw vertical line
    context.beginPath();
    context.moveTo(xCenter, 0);
    context.lineTo(xCenter, canvasHeight);
    context.stroke();

    // reset drawing pen
    context.setLineDash([5, 0]);
};










/**
 * Draws some text at coordinates (xCoord, yCoord). The function also has some logic to prevent the text from going outside the borders of the canvas
 * @date 2021-06-13
 * @param {CanvasRenderingContext2D} context
 * @param {string} text: text to write
 * @param {number} xCoord: where to write
 * @param {number} yCoord: where to write
 * @returns {void}
 */
function addCoordinates(context: CanvasRenderingContext2D, text: string, xCoord: number, yCoord: number){//, isInUpPlane = true, isInRightPlane = true){
    if(!context || !text) return;
    if(!xCoord) xCoord = 0;
    if(!yCoord) yCoord = 0;

    // Prepare pen
    const margin = 12;
    context.font = `${margin - 2}px Arial`;

    // Logic to align text not to overflow on canvas
    const isInUpPlane = yCoord < 0;
    const isInRightPlane = xCoord > 0;
    context.textAlign = "center";
    context.textAlign = isInRightPlane ? "right" : "left";

    // Write text
    context.fillText(text, xCoord + margin * (isInRightPlane ? 1 : -1), yCoord + margin * (isInUpPlane ? 1 : -1)); 
}












/**
 * Draws an arrow: A line that start at (fromx, fromy), ends at (tox, toy). A small arrow is added at (tox, toy)
 * @date 2021-06-13
 * @param {CanvasRenderingContext2D} context
 * @param {number} fromx:number
 * @param {number} fromy:number
 * @param {number} tox:number
 * @param {number} toy:number
 * @returns {void}
 */
function drawCanvasArrow(context: CanvasRenderingContext2D, fromx: number, fromy: number, tox: number, toy: number) {
    if(!context || !fromx || !fromy || !tox || !toy) return;
    if(tox == fromx && toy == fromy) return;


    var headlen = 10; // length of arrow head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx); // line angle with horizontal

    // Draw line
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    // Draw one side of arrow head
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    // Draw the other side of arrow head
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}








/**
 * Draws a vector using its polar representation. 
 * If `doAddCoords` is true, adds the text representation of its coordinates on the canvas
 * @date 2021-06-13
 * @param {TCanvasParameters} canvasData:
 * @param {number} length:number
 * @param {number} degreeAngleToHorizontal:number
 * @param {boolean} doAddCoords=false
 * @returns {any}
 */
function drawPolarVector(canvasData: TCanvasParameters, length: number, degreeAngleToHorizontal: number, doAddCoords = false){
    // Converts to cartesian representation. Our drawing function works with cartesian coordinates.
    const cartesianVector = toCartesian({radius: length, degreeAngle: degreeAngleToHorizontal});

    // Draw the vector with the polar text representation of the coordinates
    drawCartesianVector(canvasData, cartesianVector.x, cartesianVector.y, doAddCoords, `${formatNumber(length)} ∠ ${formatNumber(degreeAngleToHorizontal)}°`);
}

/**
 * Draws a vector using its cartesian representation. 
 * If `doAddCoords` is true, adds the `label` string on the canvas
 * @date 2021-06-13
 * @param {TCanvasParameters} canvasData:TCanvasParameters
 * @param {number} xComponent:number
 * @param {number} yComponent:number
 * @param {boolean} doAddCoords=false
 * @param {string} label?:string
 * @returns {void}
 */
function drawCartesianVector(canvasData: TCanvasParameters, xComponent: number, yComponent: number, doAddCoords = false, label?: string){
    if(xComponent == 0 && yComponent == 0) return;

    // Draw the arrow representing the vector
    drawCanvasArrow(canvasData.context, canvasData.xCenter, canvasData.yCenter, canvasData.xCenter + canvasData.xUnit * xComponent, canvasData.yCenter - canvasData.yUnit * yComponent);
    
    // Add label to canvas
    if(doAddCoords) addCoordinates(canvasData.context, label ? label : `(${formatNumber(xComponent)}, ${formatNumber(yComponent)})`, canvasData.xCenter + canvasData.xUnit * xComponent, canvasData.yCenter - canvasData.yUnit * yComponent);//, yComponent < 0, xComponent > 0);
}


/**
 * Draws a vector on the canvas. If `usePolarForm` is true, its polar representation is computed and drawn.
 * @date 2021-06-13
 * @param {boolean} usePolarForm:
 * @param {TCanvasParameters} canvasData:
 * @param {number} xComponent:
 * @param {number} yComponent:
 * @param {boolean} doAddCoords=false
 * @param {string} label?:
 * @returns {void}
 */
function drawVector(usePolarForm:boolean, canvasData: TCanvasParameters, xComponent: number, yComponent: number, doAddCoords = false, label?: string){
    // If we are to draw the cartesian form, draw and leave early
    if(!usePolarForm) return drawCartesianVector(canvasData, xComponent, yComponent, doAddCoords, label);
    
    // Compute and draw polar represnetaiton
    const polar = toPolar({x: xComponent, y: yComponent});
    return drawPolarVector(canvasData, polar.radius, polar.degreeAngle, doAddCoords);
};
/**
 * Higher order function that returns a function that will draw a set of vectors (in cartesian form) on the canvas using the reprensentation
 * prescribed by `usePolarForm`
 * @date 2021-06-13
 * @param {boolean} usePolarForm:
 * @param {TCanvasParameters} canvasData:
 * @returns {(vectorsToDraw: TCartesianVector[], penColor?: string) => void} Function to draw an array of vectors
 */
function getBulkVectorsDrawer(usePolarForm: boolean, canvasData: TCanvasParameters){

    // Choose the correct function that will draw given `usePolarForm`
    const drawFunction = drawVector.bind(null, usePolarForm);

    // Return new function that will take an array of vectors and a color, and will draw them on the canvas
    return (vectorsToDraw: TCartesianVector[], penColor: string = "#000")=>{
        // Prepare pen
        canvasData.context.lineWidth = 1;
        canvasData.context.strokeStyle = penColor;
        canvasData.context.beginPath();

        // draw each vector in the array
        vectorsToDraw.forEach((vector) => drawFunction(canvasData, vector.x, vector.y, true));
        
        // Finish the drawing
        canvasData.context.stroke();
        // canvasData.context.strokeStyle = strokeNormalColor;
    }
}













/**
 * Compute a `canvas-unit` that will ensure that all the vectors in `arr` can be drawn without overflowing on the canvas.
 * `canvas-unit` defaults to `10`
 * @date 2021-06-13
 * @param {number} canvasWidth:
 * @param {TCartesianVector[]} vectors:
 * @returns {number}: The `canvas-unit`
 */
const getUnit = (canvasWidth: number, vectors: TCartesianVector[])=> (!vectors ? 10 : 0.4 * (canvasWidth || 300) / vectors.reduce((acc, item) => Math.max(acc, item.x, item.y), 1));









export { drawCanvasAxis, clearCanvas, drawCartesianVector, drawPolarVector, getBulkVectorsDrawer, getUnit };









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