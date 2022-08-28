# Typescript intro  



## Typescript 

```
   - what is typescript 
   - Installation and config file 
   - Interfaces and types 
   - readonly
   - Utility type 

```

### what is Typescript 

```
  ~ Typescript is a programming language 

  ~ Typescript build top on javascript 

  ~ so every javascript file is a valid Typescript 

```

### Installation 

```
  ~ npm install -g typescript

  ~ tsc -v 

```

### What is tsconfig.ts file 

```
  ~ It is a configuration file for typescript 

  ~ tsc --init 

      "outDir": "./dist",  <--- after compilation your javascript code will store here                        
      "rootDir": "./src",  <--------- our typescript code will be in this folder     
      "removeComments": true,    

```

## Types vs Interfaces 

```
  ~ Types is like aliases

  ~ types can not extends other types 

```

### Interface 

```typescript 

   interface student{
   
        name: string,
        id: number 
    }

    interface skill{
        
        skillname: string 
    }

    interface doStaff{

        jumping():number; // jumping is the function name returns an number  

        swimming():void;

    }

    interface forFunction{

        (id:number):string; // annonymous function 
    }

    // object 
    let Aritra:student = {
        name:"aritra",
        id:1
    }

    // class implements interface 
    class Athlete implements doStaff{

        jumping(): number {
            return 1;
        }

        swimming(): void {
            console.log("swimming");
        }
    }

    // function 
    const calculate:forFunction = (id:number) => "calculate function";


```

### Types 

```typescript 
  
    type Phone = string;

    type Feature = (id:number) => string;

    type Company = {

        size:number;
        age:number;
    }

    type Laptop = {
        
        color:string;
        size:number;
        weight:number;
        ram:boolean;
        company:Company

    }

    type Desktop = {

        color:string;
        company:Company
    }

    type Choose = Laptop | Desktop // or 

    const dell:Laptop = {

        color:"balck",
        size:1,
        weight:10,
        ram:true,
        company:{
            size:10,
            age:100
        }
    }

```

### readonly 

```typescript 
   
    class Person{

        public readonly name:string;
        public age:number;

        constructor(name:string,age:number){
            
            this.name = name;
            this.age = age;
        }
    }

    const person = new Person("aritra",12);
    person.age = 30; // You can change the age 
    person.name = "banti"; // but you can not change the name  
    console.log(person.name);

```

### utility 

```typescript 
  
   interface Cat{
       
       name:string;
       age:number;
   }
   
   /*
        - Instead of copy paste code or create a new intreface we create a utility type 
        - it looks like this 
          type CheckedCat = {
              name: string,
              age: number 
          }

        - check typescript docs to know more   
    */
   type CheckedCat = Required<Cat>; 
   

   function Pet(cat:Cat,ccat: CheckedCat):void{
      
   }

```





