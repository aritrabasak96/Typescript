// other services 

import { OtherBooking } from "./otherBooking";
import {CourtBooking} from './courtBooking';

class TiffinBooking extends OtherBooking{
     
    private cb:CourtBooking;

    constructor(cb:CourtBooking){
        
        super();
        this.cb = cb;
    }

    bookingPrice():number{

        let totalPrice = 80 + this.cb.bookingPrice();
        return totalPrice;  // for one pieceyou have to pay 50 rs
    }
}

export {TiffinBooking}