import chalk from 'chalk';
import { Object } from "./ObjectClass.js";

export class Monster extends Object {
    get getMonsterHitState() {//피격 상태 리턴
        return this.HitState;
    }
    get getMonsterDefState() {//방어 상태 리턴
        return this.def_State;
    }
    //----------------------------------------------------------------------------
    set setMonsterATK_Min(AddAtkMin) {// 최소 공격력 증가
        this.atk += AddAtkMin;
    }
    set setMonsterATK_Multi(AddAtkMulti) {// 최대 공격력 배율 증가
        this.atk_Multiplication += AddAtkMulti;
    }
    set setMonsterATK_Double(AddAtkDouble) {// 연속 공격 확률 증가
        this.double_atk += AddAtkDouble;
    }
    set setMonsterHitState(hitState) {//피격 상태 설정
        this.HitState = hitState;
    }
    set setMonsterHP_MAX_AND_CURRENT(AddHealth) {// 최대 체력 및 현재 증가
        this.MaxHp += AddHealth;
        this.CurrentHp += AddHealth;
    }
    set setMonsterDefState(defState) {//방어 상태 설정
        this.def_State;
    }
    set setMonsterDEF(AddDef) {// 방어력 증가
        this.def += AddDef;
    }
    //----------------------------------------------------------------------------
    async MonsterStatUp(MonsterRandomStat) {
        // 능력치 enum
        const eRandomStat = {
            eATK_MIN: 1,
            eATK_MULTI: 2,
            eATK_DOUBLE: 3,
            eHEALTH: 4,
            eDEF: 5,
        }
        // 스테이지 클리어 보상
        switch (MonsterRandomStat) {
            case eRandomStat.eATK_MIN: {
                // 최소 공격력 증가      
                setMonsterATK_Min = Math.floor(Math.random() * 20 + 5);
                break;
            }
            case eRandomStat.eATK_MULTI: {
                // 최대 공격력 배율 증가
                setMonsterATK_Multi = Math.floor(Math.random() * 1 + 0.1);
                break;
            }
            case eRandomStat.eATK_DOUBLE: {
                // 연속 공격 확률 증가
                setMonsterATK_Double = Math.floor(Math.random() * 7 + 3);
                break;
            }
            case eRandomStat.eHEALTH: {
                // 체력 증가
                setMonsterHP_MAX_AND_CURRENT = Math.floor(Math.random() * 50 + 20);
                break;
            }
            case eRandomStat.eDEF: {
                // 방어 증가
                setMonsterDEF = Math.floor(Math.random() * 10 + 3);
                break;
            }
        }
    }
}