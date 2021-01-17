// this is an abstract class 

abstract class CourtBooking{
    
    public getInfo():void{
        console.log("Hello,welcome to court booking")
    }
    // an abstract class for price 
    abstract bookingPrice():number;

}

export {CourtBooking}