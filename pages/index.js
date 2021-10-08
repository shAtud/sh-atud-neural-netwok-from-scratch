import Head from 'next/head'
import {Line} from 'react-chartjs-2';

export default function Home() {
  const fData = [];
  for(let i=0;i<10;i++){
    fData.push({x:i,y:i*i})
  }
  const data = {
        labels:fData.map(d=>d.x),
        datasets:[
          {
            label:'khra for 2020',
            data:fData.map(d=>d.y),
            backgroundColor:['red','blue'],
            borderColor:['yellow'],
            pointBackgroundColor:['orange'],
            pointBorderColor:['black']

          }
        ]

  }
  const options = {
      title:{
        display:true,
        text:'Line chart',

      },
      scales:{
        yAxes:[
          {
            ticks:{
              min:0,
              max:6,
              stepSize:1,
            }
          }
        ]
      }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center border-4 h-[50vh]">
          <Line data={data} options={options}/>
      </main>
    </div>
  )
}
