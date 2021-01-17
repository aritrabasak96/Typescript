import { RegisterMember } from "./registerMember"
import { NormalMember } from "./normalMember";
import {CouponMember} from './couponMember';
import {BookTicketInterface} from './bookTicketInterface';
import {BookingManager} from './bookingManager';


class BookManagerKolkata extends BookingManager{

    bookZone(type:string):BookTicketInterface{

        if(type === "register"){
           
            return new RegisterMember();
        }
        else if(type === "coupon"){
           
            return new CouponMember()
        }
        else{

            return new NormalMember()
        }
    } 
}

export {BookManagerKolkata}