import {CourtBooking} from './courtBooking';

class GrassCourtBooking extends CourtBooking{
    
    // booking price for grass court 
    bookingPrice():number{
        return 100 // 100 rs 
    } 
}

export {GrassCourtBooking}