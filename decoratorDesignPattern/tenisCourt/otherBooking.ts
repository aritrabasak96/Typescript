import { CourtBooking } from "./courtBooking";

abstract class OtherBooking extends CourtBooking{

    getInfo():void{
      
        console.log("For other booking you have to pay extra")
    }
}

export {OtherBooking}