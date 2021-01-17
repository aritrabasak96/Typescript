// work of the builder class 
// set the variables/parameters as methods with explicit name

import { Mobile } from "./mobile";

class MobileBuilder{
   
    private os:string;
    private size:number;
    private ram:number;
    private hd:number;
    private brand:string;
    private camera:string;
   
    public setOs(os:string):MobileBuilder{
        
        this.os = os;
        return this;
    } 

    public setSize(size:number):MobileBuilder{
        
        this.size = size;
        return this
    }

    public setRam(ram:number):MobileBuilder{
        this.ram = ram;
        return this 
    }

    public setHd(hd:number):MobileBuilder{

        this.hd = hd;
        return this;
    }

    public setBrand(brand:string):MobileBuilder{

        this.brand = brand;
        return this;
    }

    public setCamera(camera:string):MobileBuilder{
       
        this.camera = camera
        return this;
    }

    public getMobile():Mobile{

        return new Mobile(this.os,this.size,this.ram,this.hd,this.brand,this.camera)
    }

}

export {MobileBuilder}