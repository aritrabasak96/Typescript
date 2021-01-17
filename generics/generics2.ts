interface myType{

    name:string,
    age:number
}

interface myType2{

    name:string,
    age:number
}

abstract class Listner<T extends myType>{

    abstract myName:T['name'];

}

class TestName extends Listner<myType2>{
    
    myName = 'hfhe'; // only allow string 

    readonly skill:string = 'uwdhu';

    
   public test(){

     this.skill = 'dhd'  // can not assign value 
   }
        
}