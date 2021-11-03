import * as d3 from 'd3'
import React, { useRef ,useEffect,useState} from 'react';
import AdjMatrix from './AdjMatrix';

  const {line,select,pointer} = d3;
  class AdjacencyMatrix{
    constructor(v_num,edges=[],type='NO'){
        
        this.v_num = v_num;
    
        this.type = type;
        
     
        this.edges = [...new Set(edges)];

       
        this.adj_matrix = [];
        edges.forEach(el=>{
            if(el.x ==undefined || el.y==undefined) {
                console.log('ERROR:AdjacencyMatrix edges parametre',el)
               
            }
            else if(el.x>v_num-1 || el.y>v_num-1){
                console.log('ERROR:AdjacencyMatrix edges')
                
            }
           
        })
        for(let i=0;i<v_num;i++){
            this.adj_matrix.push([]);
            for(let j=0;j<v_num;j++){
               
              
                this.adj_matrix[i].push(0)
              
             
               
            }
        }
      edges.forEach(el=>{
         if(el.x<=v_num-1 && el.y<=v_num-1){
           
            this.adj_matrix[el.x][el.y] = 1;
            
        }
       
      })
        

    }
}
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
        if(!exists) circles.push({cx,cy,i,color:'black',r});
    }

    return circles;
}

const Graph = props =>{
    const width = 500;
    const height = 500;
    const ref = useRef(null);
    const NUM_nodes = 4;
    const [circles,setCircles] = useState( generateCirclesData(NUM_nodes,20,width,height))
    const [edges,setEdges] = useState([{x:0,y:1},{x:0,y:2},{x:2,y:3},]);
    const [circleSelected,setCircleSelected] = useState(null);
    const m = new AdjacencyMatrix(NUM_nodes,edges)
    const [al,setAl] = useState(m.adj_matrix);
    useEffect(()=>{
        doBfs()
    },[])
    useEffect(()=>{
        const svg = select(ref.current);
   
    
       
         
        const g =svg.selectAll('g').data(circles)
        .join(
                enter=>{
                    const g = enter.append('g');
                        g.append('circle')
                            .attr('id',value=>`circle-${value.i}`)
                            .attr('cx',value=>value.cx)
                            .attr('cy',value=>value.cy)
                            .attr('r',value=>value.r)
                            .attr('fill',value=>value.color)
                            .attr('stroke-width',2)
                            .style('cursor','pointer')
                           
                        g.append('text')
                            .text((value,index)=>index).attr('fill','white').attr('text-anchor','middle').attr('font-size',20)
                            .attr("dy", ".35em")
                            .attr("x",value=> value.cx)
                            .attr("y", value=>value.cy)
                            .style('cursor','pointer')
                            g.on("mousedown", (e,i)=>{
                             
                                svg.on('mouseup',()=>{svg.on('mousemove',null);   d3.select(`#circle-${i.i}`).attr('fill','black')})
                                console.log(d3.select(`#circle-${i.i}`).node())
                                d3.select(`#circle-${i.i}`).attr('fill','red')
                                handleMouseMove(svg,i)
                            
                     
                              })
                },
                update=>{
                    update.on("mousedown", (e,i)=>{
                        
                        handleMouseMove(svg,i)
                        svg.on('mouseup',()=>{svg.on('mousemove',null);   d3.select(`#circle-${i.i}`).attr('fill','black')})
                        console.log(d3.select(`#circle-${i.i}`).node())
                        d3.select(`#circle-${i.i}`).attr('fill','red')
                        
                      })
                
                    update.select('circle')
                    .attr('cx',value=>value.cx)
                    .attr('cy',value=>value.cy)
                    .attr('fill',value=>value.color)
                   
                    update.select('text')
                        .text((value,index)=>index).attr('fill','white').attr('text-anchor','middle').attr('font-size',20)
                        .attr("dy", ".35em")
                        .attr("x",value=> value.cx)
                        .attr("y", value=>value.cy)
                   
                 },
               

        )
        function handleMouseMove(svg,i){

            svg.on('mousemove',(e)=>{    
                                  
                                    
                const [mx,my] = pointer(e); //mouse cordinates
                const newCircles = [...circles];
              
                newCircles[i.i] = {...newCircles[i.i],cx:mx,cy:my}
                setCircles(newCircles)
         
          
                
                 
               
              
             
            });
        }
       
      
       
          
       
           
      
         const {line} = d3;
      
         
         svg.selectAll('path').data(edges).join('path')
         .attr('d',value=>{
                 const vectModule = Math.sqrt(Math.pow(circles[value.x].cx-circles[value.y].cx,2)+Math.pow(circles[value.x].cy-circles[value.y].cy,2))
                 const unitVect = {x:(circles[value.x].cx-circles[value.y].cx)/vectModule,y:(circles[value.x].cy-circles[value.y].cy)/vectModule}                   
                 return line()([
                            [circles[value.x].cx-20*unitVect.x,circles[value.x].cy-20*unitVect.y],
                            [circles[value.y].cx+20*unitVect.x,circles[value.y].cy+20*unitVect.y]
                        ])}
                        )
         .attr('stroke','blue')
         .attr('id',value=>`edge-${value.x}-${value.y}`)

            
       
    },[circles,edges])
    function handleMouseOverSvg(e){
    
        const [mX,mY] = pointer(e); //mouse cordinates
        const newCircles = circles;
        if(circleSelected){
            console.log(circles.findIndex(circleSelected))
            circles[circles.findIndex(circleSelected)] = {cx:mX,cy:mY}
        }
        
    
    }
    function handleMouseOver(d, i){
         
            setCircleSelected(i)
       
    }
    function dfs(start,ad_list,visited=new Set()){
          
            const newCircles = [...circles];
            console.log('dfs:',start,'begin')
            setTimeout(()=>{
                const newCircles = [...circles];
                newCircles[start].color = 'green';
                setCircles(newCircles)
            },1000)
          
        
         
            visited.add(start)
            ad_list.get(start).forEach(nighbor=>{
                        if(!visited.has(nighbor)){
                                            visited.add(nighbor)
                                           
                                                dfs(nighbor,ad_list,visited);
                                          
                                          
                                    
                                        }
                        })
                        setTimeout(()=>{
                            const newCircles = [...circles];
                            newCircles[start].color = 'red';
                            setCircles(newCircles)
                        },1000)
                        console.log('dfs:',start,'end')
          
           
       
        
            
        
    }
    function bfs(start,ad_list){
        const queue = [start];
       
        while(queue.length!=0){
            const current = queue.shift();
           
            const newCircles = [...circles];
            newCircles[current].color = 'green';
            setCircles(newCircles)
          
 ad_list.get(current).forEach(nighbor=>{
                queue.push(nighbor)
            })
        
               
                newCircles[current].color = 'red';
                setCircles(newCircles)

        

           
         
           
           
           
        }
    }
    function doBfs(){
        const ad_list = new Map();
        for(let i=0;i<NUM_nodes;i++){
            ad_list.set(i,[]);
        }
        edges.forEach(edge=>{
            ad_list.get(edge.x).push(edge.y);
        })
       
            bfs(0,ad_list);
    }
    function doDfs(){
        const ad_list = new Map();
        for(let i=0;i<NUM_nodes;i++){
            ad_list.set(i,[]);
        }
        edges.forEach(edge=>{
            ad_list.get(edge.x).push(edge.y);
        })
       
            dfs(0,ad_list);
     
       
    }
    return(
        <>
           <AdjMatrix
                al={al}
                setAl={setAl}
                setEdges={setEdges}
                edges={edges}
                NUM_nodes={NUM_nodes}
           />
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