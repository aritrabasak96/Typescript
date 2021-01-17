function cal(a:number,b:number):number{
  
    return a + b;
}

function Myname1(obj:object){
    
    let skill1 = "skill1"
    return {...obj,skill1};
}

// type => string,object,number
// T is a type not a value 
function Myname<T extends object>(obj:T){
   
   let skill = "coding"; 
   return {...obj,skill} 

} 

function Myname2({name,age}:{name:string;age:number}){
    
    let skill2 = "coding";
    return {name:name,age:age,skill2:skill2}
}

//let value = cal(12,23); 
let value = Myname({name:"aritra",age:21})
console.log(value) // o/p => {name:"aritra",age:21,skill:"coding"}
