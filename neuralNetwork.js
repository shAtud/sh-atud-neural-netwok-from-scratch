class Neuron{
    constructor(x,w,b){
        
        this.val =   this.calculateVal(x,w,b);
         this.activatedVal =  this.sigmoid(this.val);

    }

    sigmoid(x){
        return   1/(Math.exp(-x)+1);
    }
  
   
    calculateVal(x,w,b){
        let res;
        for(let i=0;i<x.length;i++){
            res = x[i]*w[i];
        }
        res += b;

        return res;
    }
   
   
   
}

const n = new Neuron([1,2,3,4,5],[1,2,3,4,5],10);
console.log(n.activatedVal);
