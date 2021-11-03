 const AdjMatrix = ({al,setAl,NUM_nodes,setEdges,edges})=>{
    
    var nb = []
    for (let i=0;i<NUM_nodes;i++){
      nb.push(`v${i}`)
    }
  
    function handleChange(e,index,j){
      const {target:{value}}=e;
      console.log(typeof value,value)
    
     
      const newAl = [...al];
      newAl[index][j] = value.charAt(0)
      if(newAl[index][j]==='1'){
        setEdges([...edges,{x:index,y:j}])
      }else if(newAl[index][j]==='0'){
            const newEdges = [...edges]
            newEdges.splice(newEdges.indexOf({x:index,y:j}),1)
            setEdges(newEdges)
      }
      setAl(newAl);
      //e.target.value ghir sidali yhab ye5la3ni hada ma kan
  
    }
    return(
      <table className="">
      <thead>
        <tr>
        <th>{' '}</th>
        {nb.map((el,index)=> {
            return(
  
              <th className = 'bg-purple-300 text-center '>{el}</th>
            )
          })}  
        </tr>
      </thead>
      <tbody>
        {nb.map((el,index)=> {
            return(
              <tr className= '' key={index}>
              <th className = 'bg-purple-300 text-center '>{el}</th>
              {al[index].map((d,j)=>{
                  return(
                    <th className = " text-center  border-separate border border-purple-800">
                      <input type='number' min='0'max='1'
                           value ={d} onChange={(e)=> handleChange(e,index,j)} 
                          v-for="item in items" 
                          className = 'text-center w-auto h-auto '/>
                    </th>    
                  )
                })
              }   
              </tr>
            )
          })}
      </tbody>
    </table>
    )
  }

export default AdjMatrix;