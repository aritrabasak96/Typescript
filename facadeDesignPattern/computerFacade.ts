import {BootingMsg} from './BootingMsg';
import {ConfigureHarddrive} from './configureHarddrive'
import {ConfigureRam} from './configureRam';


class ComputerFacade{
   
    private bm:BootingMsg;
    private ch:ConfigureHarddrive;
    private cr:ConfigureRam;

   constructor(){
       
      this.bm = new BootingMsg();
      this.ch = new ConfigureHarddrive();
      this.cr = new ConfigureRam();
   }

    start():void{
        
        // first show the welcome message 
        this.bm.welcomeMsg();
        // then check the ram and harddrive configuration
        this.ch.hardDrive();
        this.cr.ram();

        // once everything is done start the computer 
        console.log("start computer")
    }

}

export {ComputerFacade}