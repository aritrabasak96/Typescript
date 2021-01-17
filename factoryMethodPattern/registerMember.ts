import {BookTicketInterface} from './bookTicketInterface'

class RegisterMember implements BookTicketInterface{

    booking():void{

        console.log("register member booking ---- 80% off---successful")
    }
}

export {RegisterMember}
