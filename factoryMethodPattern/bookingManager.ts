//import {BookingManagerInstance} from './bookingManagerInstance';
import {BookTicketInterface} from './bookTicketInterface';


abstract class BookingManager{

       book(type:string):void{
       
        // never write if else every time
       
        let bz:BookTicketInterface = this.bookZone(type);

        bz.booking();


    }
    
    abstract bookZone(type:string):BookTicketInterface;
}

export {BookingManager}