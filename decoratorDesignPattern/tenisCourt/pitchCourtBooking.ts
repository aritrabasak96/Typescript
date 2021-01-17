import {CourtBooking} from './courtBooking';

class PitchCourtBooking extends CourtBooking{
    
    // booking price for pitch court 
    bookingPrice():number{
        return 200 // 200 rs 
    } 
}

export {PitchCourtBooking}