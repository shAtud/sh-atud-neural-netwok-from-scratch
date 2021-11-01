import { useEffect } from 'react';
import * as d3 from 'd3'
const {select,scaleLinear,max,scaleBand,axisLeft,axisBottom,} = d3;
 const BarChart = ({title}) => {

    useEffect(() => {
     
     
        const svg = select('#barChart');
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        
        const render = data =>{
            
  
             
            const xValue = d=>d.population;
            const yValue = d=>d.country;
            const margin = {top: 40 , right: 20,bottom: 60,left: 60}
            const innerWidth = width-margin.right-margin.left;
            const innerHight = height-margin.top - margin.bottom;
            const xScale = scaleLinear()
            .domain([0,max(data,xValue)])
            .range([0,innerWidth]);
            const yScale = scaleBand()
            .domain(data.map(yValue))
            .range([0,innerHight])
            .padding(0.1)
  
            
       
  
            // console.log(xScale.domain())
            // console.log(xScale.range())
            const g = svg.append('g')
                .attr('transform',`translate(${margin.left},${margin.top})`)
                
  
             const gTicks= g.append('g').call(axisLeft(yScale));
                  gTicks.selectAll('.domain , .tick line').remove();
                  gTicks.selectAll('g .tick').style('font-size','0.8rem')
           
           const xAxisG=   g.append('g').call(axisBottom(xScale));
           xAxisG.attr('transform',`translate(${0},${innerHight})`)
  
           xAxisG.append('text').text('population')
            .style('color','black').style('font-size','1.2rem')
            .attr('opacity',1)
            .attr('x',innerWidth/2)
            .attr('fill','black')
            .attr('y',40)
          
              
           
              g.selectAll('rect').data(data)
              .enter().append('rect')
                  .attr('y',d=>yScale(yValue(d)))
                  .attr('width',d => xScale(xValue(d)))
                  .attr('height',yScale.bandwidth())
                  .attr('fill','steelblue')
  
              //title
              g.append('text').text(title)
              .style('color','black').style('font-size','2rem')
              .attr('opacity',1)
              .attr('y',-10)
              .attr('x',10)
        };
            
  
       render([
         {
  
          population:5000,
          country:'algeria'
  
         },
         {
          population:3000,
          country:'algeria1'
          
        },
        {
          population:7000,
          country:'algeria2'
          
        },
        {
          population:2000,
          country:'algeria3'
          
        },
        {
          population:4000,
          country:'algeria4'
          
        },
        {
          population:1000,
          country:'algeria5'
          
        }
       ])
       
  
       
  
       
      }, [])
    return (
        <div>
             <svg 
                id='barChart' 
                width={500} 
                height={300}
                className=''
                >
        </svg>
        </div>
    )
}

export default BarChart;
