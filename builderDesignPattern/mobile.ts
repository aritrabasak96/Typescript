

class Mobile{
    
    private os:string;
    private size:number;
    private ram:number;
    private hd:number;
    private brand:string;
    private camera:string;

    constructor(os:string,size:number,ram:number,hd:number,brand:string,camera:string){
         
        this.os = os;
        this.size = size;
        this.ram = ram;
        this.hd = hd;
        this.brand = brand;
        this.camera = camera;
    }

}

export {Mobile}