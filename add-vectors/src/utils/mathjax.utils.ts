

/**
 * Converts a cartesian vector (with components x and y) to a tex string 
 * @date 2021-06-13
 * @param {number} xComponent:number
 * @param {number} yComponent:number
 * @returns {string}
 */
const texFromCartesianVector = (xComponent: number, yComponent: number): string => `${xComponent.toFixed(2)} \\(\\overrightarrow{e_x}\\) + ${yComponent.toFixed(2)} \\(\\overrightarrow{e_y}\\)`;
/**
 * Converts a polar vector (with components radius and angle(degrees)) to a tex string 
 * @date 2021-06-13
 * @param {number} polarRadius
 * @param {number} polarDegreeAngle
 * @returns {string}
 */
const texFromPolarVector = (polarRadius: number, polarDegreeAngle: number): string => `${polarRadius.toFixed(2)} ∠ ${polarDegreeAngle.toFixed(2)}°`;






/**
 * Given a html dom node, have the mathjax window object process it. This will transform its inner HTML with the tex string to render
 * 
 * http://docs.mathjax.org/en/latest/web/typeset.html
 * @date 2021-06-13
 * @param {HTMLElement} node: html dom node to re-render
 * @returns {void}
 */
 const forceMathjaxRender = (node?: HTMLElement) => (window as any).MathJax?.typeset(node ? [node] : undefined);


/**
 * Usage for mathjax typeset functions
 * ```
 *  window.MathJax.typesetClear()
 *  node.innerHTML = '$$\\frac{a}{1-a^3}$$';
 *  window.MathJax.typeset()
 * ```
 * 
 * Do not give any argument to the typeset functions to re-render the whole page
 */


 /**
  * Given a node, remove its previous content (rendered by pathjax previously), replace it with a new tex string.
  * Then notify mathjax, to forget that it processed this node before. This will allow re-rendering when `MathJax.typeset` is called
  * 
  * http://docs.mathjax.org/en/latest/web/typeset.html
  * @date 2021-06-13
  * @param {any} node:HTMLElement
  * @param {any} innerHtml:string
  * @returns {any}
  */
 const resetMathjaxNode = (node: HTMLElement, innerHtmlWithTexString: string) => {
     if(!node || !innerHtmlWithTexString) return;

     // New math expression
     node.innerHTML = innerHtmlWithTexString;

     // Tell mathjax to forget that it processed this node before
     (window as any).MathJax?.typesetClear([node]);
 }

export { texFromCartesianVector, texFromPolarVector, forceMathjaxRender, resetMathjaxNode };