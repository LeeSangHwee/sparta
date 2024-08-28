import chalk from 'chalk';
import { Object } from "./ObjectClass.js";

export class Monster extends Object {
    get getPlayerDefState(){//방어 상태 리턴
        return this.def_State;
    }
}