import {ThrowInterface} from './throwInterface';

class NewArcherAbstraction implements ThrowInterface{


    throw():void{
        console.log("level 10 archer throwing")
    } 
}

export {NewArcherAbstraction}