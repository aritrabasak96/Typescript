import {BookTicketInterface} from './bookTicketInterface'

class NormalMember implements BookTicketInterface{

    booking():void{

        console.log("normal member booking kolkata --- successful")
    }
}

export {NormalMember}
