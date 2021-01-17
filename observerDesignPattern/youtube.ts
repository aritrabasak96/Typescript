import {Subscriber} from './subscriber';
import {Channel} from './channel';

function main(){
     
    let ch1 = new Channel('electro gadgets');

    // create subscribers 
    let s1 = new Subscriber('Ram');
    let s2 = new Subscriber('Shyam');
    let s3 = new Subscriber('Ramesh');

    // these subscribers subscribe to my channel 

    ch1.addSubscriber(s1);
    ch1.addSubscriber(s2);
    ch1.addSubscriber(s3);


    // now electro gadgets upload a video 
    ch1.uploadVideo('How to create a rc car at home');
}

main()