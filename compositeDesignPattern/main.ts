import {CompositeObject} from './compositeObject';
import {LeafObject} from './leafObject';
import {PriceInterface} from './priceInterface';

function main(){

   let com:CompositeObject = new CompositeObject("computer",1000);

   let cabinet:CompositeObject = new CompositeObject("cabinet",500);

   let pd:CompositeObject = new CompositeObject("pheripheral device",200);

   let mb:CompositeObject = new CompositeObject("mother board",1000);

   let ram:PriceInterface = new LeafObject("ram",3400);

   let processor:PriceInterface = new LeafObject("processor",6000);

   com.addLeaf(cabinet);
   com.addLeaf(pd);

   cabinet.addLeaf(mb);

   mb.addLeaf(ram);
   mb.addLeaf(processor);

   // price 
   let t_price = cabinet.Iprice();
   console.log("price--",t_price)  // o/p => 500 (cabiner) + 1000 (mother board) + 3400 (ram) + 6000 (prcessor)
}

main();