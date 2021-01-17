import {Archer} from './archer';
import {NewArcher} from './newArcher';
import {ArcherAbstraction} from './archerAbstarction';
import {NewArcherAbstraction} from './newArcherAbstraction';

function main(){

    let a1:Archer = new Archer();
    a1.action(new NewArcherAbstraction())

    let a10:NewArcher = new NewArcher();
    a10.action(new ArcherAbstraction())
}

main()