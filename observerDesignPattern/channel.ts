import {Subscriber} from './subscriber'

class Channel{
    
    public channelName:string;

    public videoTitle:string;
    // we store the instane of the subscriber class
    public channelSubscriber:Subscriber[] = [];


     constructor(name:string){
          
        this.channelName = name 
     }

    // add subscribers to the list 
    addSubscriber(sub:Subscriber):void{
        
        this.channelSubscriber.push(sub); // convert it into a string
    }

    removeSubscriber(sub:Subscriber):void{

       let updatedChannelSubscriber = this.channelSubscriber.filter((subscriber) => subscriber !== sub)
       
       this.channelSubscriber = updatedChannelSubscriber;

    }

    private notify():void{
       
        // notify to all subscriber 
        this.channelSubscriber.forEach(sub=>{

            sub.sendNotification(this.channelName,this.videoTitle)
        })
    }

    uploadVideo(videoTitle:string):void{
        
        this.videoTitle = videoTitle;
        this.notify()
    }

}

export {Channel}