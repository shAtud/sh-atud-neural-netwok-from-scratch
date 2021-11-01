import * as d3 from 'd3'
import React, { useRef ,useEffect,useState} from 'react';

  const {line,select} = d3;
function generateCirclesData(NUM_nodes,r,width,height){
    let circles = [];
    for(let i=0;i<NUM_nodes;i++){
        let cx = Math.random()*(width-2*r)+r;
        let cy = Math.random()*(height-2*r)+r;
        let exists = false;
      
        for(let j=0;j<i;j++){
         
            const distance = Math.sqrt(Math.pow(cx- circles[j].cx,2) + Math.pow(cy- circles[j].cy,2))
            if(distance<r+r+50){
               
                i = i - 1;
                exists = true;
                break;

            }
        }
        if(!exists) circles.push({cx,cy});
    }

    return circles;
}
const Graph = props =>{
    const width = 500;
    const height = 500;
    const ref = useRef(null);
    const NUM_nodes = 5;
    const [circles,setCircles] = useState( generateCirclesData(NUM_nodes,20,width,height))
    const [edges,setAdges] = useState([{x:0,y:1}]);
    const [lines,setLines] = useState([]);
   
    useEffect(()=>{
        const svg = select(ref.current);
        const newLines = []
        edges.forEach(el=>{
            newLines.push({x:circles[el.x].cx,y:circles[el.x].cy})
            newLines.push({x:circles[el.y].cx,y:circles[el.y].cy})
        })
        setLines(newLines)
       
      
        svg.selectAll('circle').data(circles).join('circle')
            .attr('cx',value=>value.cx)
            .attr('cy',value=>value.cy)
            .attr('r',20)
      
         const {line} = d3;
        const myLine =  line()
            .x(value=>value.x)
            .y(value=>value.y)
        const k = [{x:50,y:25}]
         svg.selectAll('path').data(k).join('path').attr('d',value=>myLine(value)).attr('stroke','blue')

            
       
    },[circles])
    return(
        <>
            <svg 
                ref={ref} 
                width={width} 
                height={height}
                className='border-2'
                >
                  

            </svg>
           
        </>
    )
}

export default Graph;