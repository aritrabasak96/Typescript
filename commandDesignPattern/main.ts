import {Remote} from './remote';
import {IotBulb} from './iotBulb';

function  main() {
    
    let r:Remote = new Remote(new IotBulb());


    // click the turn on light command 
    r.turnonLightCommand();

}

main();