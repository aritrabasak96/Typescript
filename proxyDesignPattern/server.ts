// this is my main server
// and this server is hosted in a region (Dubai)

import {PageInterface} from './pageInterface'

class Server implements PageInterface{
     
    pages(userid:string):void{
       
        // return the static files 
        console.log(`for this ${userid}, return static files from main server`)
    }
}

export {Server}