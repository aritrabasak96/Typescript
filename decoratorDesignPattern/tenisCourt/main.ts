import { CourtBooking } from "./courtBooking";
import { PitchCourtBooking } from "./pitchCourtBooking";
import {TiffinBooking} from './tiffinBooking';
import { TenisBatBooking } from "./tenisBatBooking";

function main(){

    // in the main function 
    // we book pitch court booking 
    let pcb:CourtBooking = new PitchCourtBooking();

    // i want to book tiffin services 
     pcb = new TiffinBooking(pcb);

    let price:number = pcb.bookingPrice();

    console.log(`user 1 total booking price is ${price}`)

    // --------------------------- another user 

    let pcb1:CourtBooking = new PitchCourtBooking();

    let price1:number = pcb1.bookingPrice();

    console.log(`user 2 total booking price is ${price1}`)

    // ----------------------------- another user

    let pcb2:CourtBooking = new PitchCourtBooking();

    // i want to book tiffin services 
     pcb2 = new TiffinBooking(pcb2);

     // this user want tenis bat booking service as well 
     pcb2 = new TenisBatBooking(pcb2);

    let price2:number = pcb2.bookingPrice();

    console.log(`user 3 total booking price is ${price2}`)
}

main()