// create a game class 
import {Attack} from './attackInterface';
import {AttactAbstarct} from './attackAbstract';
// all groundattacked can walk like same,speed is same
// but attack is different 
abstract class GroundAttacker extends AttactAbstarct{

    public walk():void{
        console.log("ground attackers can walk like same")
    }

    public speed():number{
        return 12
    }
    
}

export {GroundAttacker}