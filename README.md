# Software Design Pattern with Typescript 


## Command Design Pattern 

> main.ts file

```typescript
   
   import {Remote} from './remote';
   import {IotBulb} from './iotBulb';

   function  main() {
    
      let r:Remote = new Remote(new IotBulb());


      // click the turn on light command 
      r.turnonLightCommand();

   }
   
main();

```

> remote.ts file 

```typescript
  
  import {IotBulb} from './iotBulb';

class Remote{
    
    public bulb:IotBulb;

    constructor(bulb:IotBulb){ // you have to pass the instance 

        this.bulb = bulb;
    }

    turnonLightCommand():void{

        this.bulb.onLight();
    }

     turnoffLightCommand():void{

        this.bulb.offLight();
    }

    
}

export {Remote}

```

>  ioBulb.ts file

```typescript
  
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

```



