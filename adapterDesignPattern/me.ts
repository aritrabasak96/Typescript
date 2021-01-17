import {Laptop} from './laptop'
import {SwitchBoard} from './switchBoard'
import  {Adapter} from './adapter';

// class Me{
    
   let t:Adapter = new SwitchBoard(new Laptop())

   t.charging();
