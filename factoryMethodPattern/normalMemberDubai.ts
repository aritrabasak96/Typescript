import {BookTicketInterface} from './bookTicketInterface'

class NormalMemberDubai implements BookTicketInterface{

    booking():void{

        console.log("normal member booking from dubai --- successful")
    }
}

export {NormalMemberDubai}
