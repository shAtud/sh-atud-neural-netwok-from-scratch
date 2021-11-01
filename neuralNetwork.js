class Neuron{
    constructor(num_inputs){
        
        this.num_inputs = num_inputs;
        this.w =[];
        this.b ;
        this.trainningHistory = [];
      
        this.maxVal=5;
        for(let i=0;i<num_inputs;i++){
           this.w.push( Math.random()*this.maxVal)  ;
          
        }
        this.b =Math.random()*this.maxVal ;
        
    }

    sigmoid(y){
        return   1/(Math.exp(-y)+1);
    }
    dSigmoid_y(y){
        return this.sigmoid(y)*(1-this.sigmoid(y));
    }
  
   
    feedForward(x){
        if(x.length != this.num_inputs) return null;
        let res = 0;
        for(let i=0;i<x.length;i++){
            res += x[i]*this.w[i];
        }
        res += this.b;
        return {val:res,activatedVal:this.sigmoid(res)}
        

      

       
    }
    desc(){
        let tmp = '';
        tmp+= 'neuron-desc:------------------\n';

        tmp+= `weights:\n`;
        this.w.forEach(el => {
            tmp +=el+' ';
        });
        tmp+= `\nb: ${this.b}\n`;

     return tmp;
    }
    loss(sig_y,y_prime){
        return Math.pow( y_prime-sig_y,2)
    }
    dloss_sig_y(sig_y,y_prime){
        return 2*(sig_y - y_prime)
    }
  
    train(x,y_prime){
        const {val,activatedVal} = this.feedForward(x);
       
          const y = val;
          let  error  =this.loss(this.sigmoid(y),y_prime);
        
       
         let dError_weight =[];
         for(let i=0;i<this.num_inputs;i++){
             dError_weight.push(
                 this.dloss_sig_y(this.sigmoid(y),y_prime) * this.dSigmoid_y(y)*x[i]
                 )

             this.w[i] -= dError_weight[i]*20;
         }

       
        //  console.log(this.desc()+`\nerror: ${error}`);
        
         for(let i=0;i<this.num_inputs;i++){
          

          
            // console.log(`derror_w${i} : ${dError_weight[i]}`);
           
        }
        n.trainningHistory.push({error,dError_weight,w:n.w,b:n.b})

    




    }
  
    
   
   
   
}

const n = new Neuron(1);
for(let i=0;i<1000;i++){
   n.train([10],0.7)
     
 }
export default n;



   



