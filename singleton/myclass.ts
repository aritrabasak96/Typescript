import {DatabaseConnect} from './myDatabase';

let obj = DatabaseConnect.getValue();

let val =  obj.getName(23);

console.log(val)