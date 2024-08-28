import chalk from 'chalk';
import { Object } from "./ObjectClass.js";

export class Player extends Object {
    get getPlayerATK_Double() {// 연속 공격 확률 리턴
        return this.double_atk;
    }
    get getPlayerHP_MAX() {// 최대 체력 값 리턴
        return this.MaxHp;
    }
    get getPlayerHP_CURRENT() {// 현재 체력 값 리턴
        return this.CurrentHp;
    }
    get getPlayerDefPer(){//방어 확률 리턴
        return this.def_per;
    }
    get getPlayerDefState(){//방어 상태 리턴
        return this.def_State;
    }
    get getPlayerRunAway() {// 도망 확률 리턴
        return this.runAway;
    }
   //----------------------------------------------------------------------------
    set setPlayerATK_Min(AddAtkMin) {// 최소 공격력 증가
        this.atk += AddAtkMin;
    }
    set setPlayerATK_Multi(AddAtkMulti) {// 최대 공격력 배율 증가
        this.atk_Multiplication += AddAtkMulti;
    }
    set setPlayerATK_Double(AddAtkDouble) {// 연속 공격 확률 증가
        this.double_atk += AddAtkDouble;
    }
    set setPlayerHP_CURRENT(AddHealth) {// 현재 체력 증가
        this.CurrentHp += AddHealth;
    }
    set setPlayerHP_MAX_AND_CURRENT(AddHealth) {// 최대 체력 및 현재 증가
        this.MaxHp += AddHealth;
        this.CurrentHp += AddHealth;
    }
    set setPlayerDEF(AddDef) {// 방어력 증가
        this.def += AddDef;
    }
    set setPlayerRunAway(AddRunAway) {// 도망 확률 증가
        this.runAway += AddRunAway;
    }
    //----------------------------------------------------------------------------
    // 스테이지 클리어 보상 함수 - 스텟 보상
    set StageClearStatRewards(RewardStat) {
        // 능력치 enum
        const eRandomStat = {
            eATK_MIN: 1,
            eATK_MULTI: 2,
            eATK_DOUBLE: 3,
            eHEALTH: 4,
            eDEF: 5,
            eRUNAWWAY: 6
        }
        // 스테이지 클리어 보상
        switch (RewardStat) {
            case eATK_MIN: {
                // 최소 공격력 증가      
                setPlayerATK_Min(Math.floor(Math.random() * 20 + 5));
                break;
            }
            case eATK_MULTI: {
                // 최대 공격력 배율 증가
                setPlayerATK_Multi(Math.floor(Math.random() * 1 + 0.1));
                break;
            }
            case eATK_DOUBLE: {
                // 연속 공격 확률 증가
                setPlayerATK_Double(Math.floor(Math.random() * 7 + 3));
                break;
            }
            case eHEALTH: {
                // 체력 증가
                setPlayerHP_MAX_AND_CURRENT(Math.floor(Math.random() * 50 + 20));
                break;
            }
            case eDEF: {
                // 방어 증가
                setPlayerDEF(Math.floor(Math.random() * 10 + 3));
                break;
            }
            case eRUNAWWAY: {
                // 도망 증가
                setPlayerRunAway(Math.floor(Math.random() * 3 + 1));
                break;
            }
        }
    }
}