import { useEffect } from 'react';
import * as d3 from 'd3'
import { useRef } from 'react';
const {
    select,
    scaleLinear,
    axisLeft,
    axisBottom,
    extent
} = d3;
 const ScatterPlot = ({title,data}) => {
    const ref = useRef(null);
    useEffect(() => {
     console.log(ref)
     
        const svg = select(ref.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        
        const render = data =>{
            
  
             
            const xValue = d=>d.x;
            const yValue = d=>d.y;
            const margin = {top: 30 , right: 20,bottom: 60,left: 60}
            const innerWidth = width-margin.right-margin.left;
            const innerHight = height-margin.top - margin.bottom;

            //scales----------------------------------------
            const xScale = scaleLinear()
            .domain(extent(data,xValue))
            .range([0,innerWidth])
           
            
            const yScale = scaleLinear()
            .domain(extent(data,yValue))
            .range([0,innerHight])
           
  
            
       
  
            // console.log(xScale.domain())
            // console.log(xScale.range())
            const xAxis = axisLeft(yScale)
                         .tickSize(-innerWidth)
            const yAxis = axisBottom(xScale)
                        .tickSize(-innerHeight+100)
            const g = svg.append('g')
                .attr('transform',`translate(${margin.left},${margin.top})`)
                
  
             const gTicks= g.append('g').call(xAxis);
               
                  gTicks.selectAll('g .tick').style('font-size','0.8rem')
           
           const xAxisG=   g.append('g').call(yAxis);
           xAxisG.attr('transform',`translate(${0},${innerHight})`)
  
           xAxisG.append('text').text('population')
            .style('color','black').style('font-size','1.2rem')
            .attr('opacity',1)
            .attr('x',innerWidth/2)
            .attr('fill','black')
            .attr('y',40)
          
              
              //circle
              g.selectAll('circle').data(data)
              .enter().append('circle')
                  .attr('cy',d=>yScale(yValue(d)))
                  .attr('cx',d => xScale(xValue(d)))
                  .attr('r',2) //to set the diameter
                  .attr('fill','steelblue')
  
              //title
              g.append('text').text(title)
              .attr('fill','black').style('font-size','1.5rem')
              .attr('opacity',1)
              .attr('x',innerWidth/2-80)
              .attr('y',-10)
             
        };
            
  
       render(data)
       
  
       
  
       
      }, [])
    return (
        <div>
             <svg ref={ref}
              
                width={500} 
                height={300}
                className=''
                >
        </svg>
        </div>
    )
}

export default ScatterPlot;
