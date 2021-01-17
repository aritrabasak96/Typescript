
import {BookingManager} from './bookingManager';
import {BookManagerDubai} from './bookManagerDubai';
import {BookManagerKolkata} from './bookManagerKolkata';


function main(){

   let type = 'normal';
   let zone = "dubai"

   if(zone === "dubai"){
      
        let dubai = new BookManagerDubai();
        dubai.book(type)
   }
   else if(zone === "kolkata"){

        let zone = new BookManagerKolkata();
        zone.book(type)
   }
   
}

main();



