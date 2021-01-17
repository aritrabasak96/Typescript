class Subscriber{
    
    public subscriberName:string;

    constructor(name:string){
          
        this.subscriberName = name;
    }

    sendNotification(channelName:string,title:string):void{

        console.log(`${this.subscriberName} New video uploaded by ${channelName} - ${title}`)
    }
}


export {Subscriber}