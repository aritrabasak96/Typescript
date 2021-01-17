import {PriceInterface} from './priceInterface';

class CompositeObject implements PriceInterface{
    
    // 
    private leafCollector:PriceInterface[] = []; // i can store the instance in the array 
    private name:string;
    private price:number;

    constructor(name:string,price:number){

        this.name = name;
        this.price = price;
    }

    public addLeaf(leaf:PriceInterface):void{
        
        this.leafCollector.push(leaf)
    }
    
    // give the hirarchical price 
    Iprice():number{
        
        let leaf_price:number = 0;
        let actual_price:number;

        this.leafCollector.map(val=>{

            leaf_price = leaf_price + val.Iprice();
        })

        actual_price = leaf_price + this.price

        return actual_price;

    }

}

export {CompositeObject}