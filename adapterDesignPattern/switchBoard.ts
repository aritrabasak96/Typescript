import {Laptop} from './laptop';
import {Adapter} from './adapter';



class SwitchBoard implements Adapter{

     private l:Laptop;

     constructor(l:Laptop){
        this.l = l
     }

     public charging(){

        
        this.l.chargeLaptop("240 volte");
     }
}

export {SwitchBoard}