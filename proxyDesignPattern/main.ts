import {ProxyServer} from './proxyServer';

function main(){
     
    let proxy:ProxyServer = new ProxyServer();
     
    // first time i request to the server 
    // pages come from main server (Dubai)

    proxy.pages("aritra");  // aritra => userid
    

    // second time i request to the server 
    // pages come from cache (my nearest location)

    proxy.pages("aritra");

    // third time i request to the server 
    // pages come from cache (my nearest location)

    proxy.pages("aritra");

    proxy.pages("banti");
    proxy.pages("banti");

}

main();