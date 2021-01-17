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