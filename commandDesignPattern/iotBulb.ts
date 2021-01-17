class IotBulb{

   public onLight():void{
       // some mechanism to turn on the light 
       console.log("light on")
   } 
   public offLight():void{
       console.log("off light")
   }
}

export {IotBulb}