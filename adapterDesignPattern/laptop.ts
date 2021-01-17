class Laptop{

    public screen():void{
      console.log("23.5 cm screen size")
    }

    public keyboard():void{

       console.log("lighting keyboard")
    }

    public chargeLaptop(current:String):void{

        console.log(`${current} is passing and you are charging`)
    }
}

export {Laptop}
