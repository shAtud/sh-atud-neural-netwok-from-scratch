import Head from 'next/head'
import {Line} from 'react-chartjs-2';

export default function Home() {
  const data = {
        labels:['kawkaw','himes','besbas','fsddsf','sfdfs'],
        datasets:[
          {
            datasets: [{
              label: "Test",
              data: [{
                 x: 0,
                 y: 5
              }, {
                 x: 5,
                 y: 10
              }, {
                 x: 8,
                 y: 5
              }, {
                 x: 15,
                 y: 0
              }],
           }]
          }
        ]

  }
  const options = {
      responsive:true,
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
