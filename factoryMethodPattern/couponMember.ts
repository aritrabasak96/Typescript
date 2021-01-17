import {BookTicketInterface} from './bookTicketInterface'

class CouponMember implements BookTicketInterface{

    booking():void{

        console.log("coupoon member booking ---- 50% off---successful")
    }
}

export {CouponMember}
