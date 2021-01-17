import {ThrowInterface} from './throwInterface';

class ArcherAbstraction implements ThrowInterface{


    throw():void{
        console.log("hey level 1 archer throwing")
    } 
}

export {ArcherAbstraction}