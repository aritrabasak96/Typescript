
import {BookingManager} from './bookingManager';
import {BookTicketInterface} from './bookTicketInterface';
import { RegisterMemberDubai } from './registerMemberDubai';
import { CouponMemberDubai } from './couponMemberDubai';
import { NormalMemberDubai } from './normalMemberDubai';

class BookManagerDubai extends BookingManager{

    bookZone(type:string):BookTicketInterface{
         
        if(type === "register"){
            return new RegisterMemberDubai()
        }
        else if(type === "coupon"){
            return new CouponMemberDubai()
        }
        else{
            return new NormalMemberDubai()
        }

    }
}

export {BookManagerDubai}

