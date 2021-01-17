// Builder pattern => when you have a lots of parameter you have to pass
// in your constructor class but you do not want/need to, then for each parameter
// you create methods with an explicit name 

import {MobileBuilder} from './mobileBuilder'
import {Mobile} from './mobile'

function main(){
   
    let m:Mobile = new MobileBuilder().setRam(4).setBrand("samsung").getMobile();
    console.log(m)
}

main();