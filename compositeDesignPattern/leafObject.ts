import {PriceInterface} from './priceInterface'; 

class LeafObject implements PriceInterface {
   
    private name:string;
    private price:number;

    // this leaf obejct
    constructor(name:string,price:number){
        this.name = name;
        this.price = price;
    } 
    
    public Iprice():number{
         
        return this.price;
        //console.log(`${this.name} price is ${this.price}`)
    }
}

export {LeafObject}