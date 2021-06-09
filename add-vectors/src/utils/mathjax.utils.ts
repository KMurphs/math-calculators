

const texFromCartesianVector = (xComponent: number, yComponent: number) => `${xComponent.toFixed(2)} \\(\\overrightarrow{e_x}\\) + ${yComponent.toFixed(2)} \\(\\overrightarrow{e_y}\\)`;
const texFromPolarVector = (polarRadius: number, polarDegreeAngle: number) => `${polarRadius.toFixed(2)} ∠ ${polarDegreeAngle.toFixed(2)}°`;


export { texFromCartesianVector, texFromPolarVector };