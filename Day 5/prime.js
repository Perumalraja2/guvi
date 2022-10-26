// prime

// anonymous function

let num12=[1,2,3,4,5,6,7,8,9,10]
        let primenum=[];
        let primenumber=function(arr){
              for(let aa of arr){
              if(aa>1){
                    let flag=true;                                      
                    for(let i=2;i<aa;i++){
                          aa%i===0? flag=false:true;                    
                    }flag?primenum.push(aa):true;
              }
        }}
        primenumber(num12)
        console.log(`Prime numbers is: ${primenum}`);
        
        
  // IIFE FUCTION
  
        let num123=[1,2,3,4,5,6,7,8,9,10]
        console.log(`Prime numbers are: ${                            
         (function(num1){
          let primenum=[];
          for (let v of num1){
                if(v>1){
                      let flag=true;
                      for(let i=2;i<v;i++){                            
                            v%i===0?flag=false:true;                   
                      }flag?primenum.push(v):true;
                }
          }
          return primenum;
         }(num123))                                                     
        }`)
    