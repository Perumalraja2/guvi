class uber {
    constructor(pickuppoint,droppoint,name,distance,rate,waitingperiod)
    {
        this.pickuppoint=pickuppoint;
        this.droppoint=droppoint;
        this.name=name;
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod=waitingperiod;
    }
    setDistance(dist)
    {
    this.distance=dist;    
    }
    
    getprice(){
        if(this.waitingperiod==null)
        {
            
            return (this.distance*this.rate);
        }
        else
        {
       
           return  ((this.distance*this.rate) + (5*this.waitingperiod));
        }
    }
        
    getdetails()
    {
       
       if(this.waitingperiod==null)
        {
            
            return (`${this.name} was rided from ${this.pickuppoint} to ${this.droppoint} covered distance of ${this.distance} km with rate of Rs ${this.rate} `);
        }
        else
        {
       
           return  (`${this.name} was rided from ${this.pickuppoint} to ${this.droppoint} covered distance of ${this.distance} km with rate of Rs ${this.rate} and waiting period was ${this.waitingperiod} mins`);
        } 
    }
    
    
}
let customer1= new uber("madurai","chennai","vijay",400,10) 
let customer2= new uber("Theni","chennai","Ajith",600,15,20)  
let customer3= new uber("madurai","vellore","asin",800,15)
customer3.setDistance(700)
let customer4= new uber("thrichy","chennai","deepika",300,11,15)


console.log(customer1.getdetails())
console.log(`${customer1.name} has to pay Rs ${customer1.getprice()}`)

console.log(customer2.getdetails())
console.log(`${customer2.name} has to pay Rs ${customer2.getprice()}`)

console.log(customer3.getdetails())
console.log(`${customer3.name} has to pay Rs ${customer3.getprice()}`)

console.log(customer4.getdetails())
console.log(`${customer4.name} has to pay Rs ${customer4.getprice()}`)

  
