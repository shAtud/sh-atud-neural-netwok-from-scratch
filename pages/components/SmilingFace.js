import { arc } from "d3-shape";
const SmilingFace = ({
    width,
    height,
    centerX,
    centerY,
    strokeWith,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius,
}) => {
   const mouthArc = arc()
                .innerRadius(mouthRadius)
                .outerRadius(mouthRadius +mouthWidth)
                .startAngle(Math.PI/2)
                .endAngle(Math.PI*(3/2))

    return (
        <svg width={width} height={height} className='border-4 border-red-700'>
            <g transform={`translate(${centerX},${centerY})`}>
                    <circle
                       
                        r={centerY-strokeWith/2}
                        fill='yellow'
                        stroke='black'
                        stroke-width={strokeWith}
                    />
                    <circle
                        cx={eyeOffsetX}
                        cy={eyeOffsetY}
                        r={eyeRadius}

                    />
                      <circle
                        cx={-eyeOffsetX}
                        cy={eyeOffsetY}
                        r={eyeRadius}
                        
                    />
                    <path d={mouthArc()} />
            </g>
        </svg>
    )
}

export default SmilingFace;
