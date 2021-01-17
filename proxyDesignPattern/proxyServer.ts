// this proxy server is hosted on in my availability zone (kolkata)
// so the pages load will become faster 

import {PageInterface} from './pageInterface';
import {Server} from './server'

class ProxyServer implements PageInterface{
   
    private userIdCache:string[] = [];
    private userIdChecker:boolean = false; // check that the user is already in the cache or not 
    private mainServer:Server;

    

    pages(userid:string):void{
         
        this.userIdChecker = false;
        
        // get the user info
        this.userIdCache.map(val=>{
    
            
            // that means the user is already in the cache 
            if(val === userid){
                 
               this.userIdChecker = true ;

            }
        })

         
      
        // user is new 
        if(this.userIdChecker === false){
             
            this.userIdCache.push(userid);
            // send the current data 
            this.mainServer = new Server();
            this.mainServer.pages(userid); 

        }
        else{
            console.log(`for this ${userid}, return static files from cache server`)
        }


    }
}


export {ProxyServer}