class Neuron{
   
    constructor(x,w,b){
    
        this.val =   this.calculateVal(x,w,b);
        this.activatedVal = sigmoid(val);

    }

    sigmoind = (x)=> 1/(Math.exp(-x)+1);
    
    calculateVal(x,w,b){
        let res;
        for(let i=0;i<x.length;i++){
            res = x[i]*w[i];
        }
        res += b;

        return res;
    }
}