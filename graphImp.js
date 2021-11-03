
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
              
               ``
               
            }
        }
      edges.forEach(el=>{
         if(el.x<=v_num-1 && el.y<=v_num-1){
           
            this.adj_matrix[el.x][el.y] = 1;
            
        }
       
      })
        

    }
}

const m = new AdjacencyMatrix(3,[{x:0,y:1}])
console.table(m.adj_matrix)

