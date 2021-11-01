import Head from 'next/head'
import { useEffect } from 'react';
import {Line} from 'react-chartjs-2';
// import n from '../neuralNetwork';
import BarChart from './components/BarChart';
import ScatterPlot from './components/ScatterPlot';
import Graph from './components/Graph';

const Home = props =>{
  

     
    
      
     
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center border-4 h-[50vh] ">
       {/* <ScatterPlot 
          title='error-iterations chart'
          data={
            n.trainningHistory.map((d,i)=>{return {x:i,y:d.error*10}})
          }
        />
         <ScatterPlot 
          title='weight-iteration chart'
          data={
            n.trainningHistory.map((d,i)=>{return {x:i,y:d.w[0]}})
          }
        />
          <ScatterPlot 
          title='error-weight chart'
          data={
            n.trainningHistory.map((d,i)=>{return {x:d.w[0],y:d.error*10}})
          }
        /> */}
        <Graph/>
      </main>
    </div>
  )
}

export default Home;


   /* <SmilingFace
                width ={ 500}
                height = {500}
                centerX ={ 500/2}
                centerY = {500/2}
                strokeWith = {10}
                eyeOffsetX = {0.2*500}
                eyeOffsetY = {-0.2*500}
                eyeRadius = {40}
                mouthWidth ={ 20}
                mouthRadius ={140}
          /> */