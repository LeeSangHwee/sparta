import chalk from 'chalk';

// 플레이어 클래스
export class Player {
  constructor() {
    this.hp = 100;
    this.atk = 10;
    this.atk_Multiplication = 0.1;
    this.runAway = 10;
    this.double_atk = 10;
    this.def = 0;
    this.def_per = 10;
  }

  // 플레이어의 피격
  hit(atk) {
    this.hp -= (atk - 1);
    //this.hp -= (atk - this.def);
  }

  // 플레이어의 공격
  attack() {
    return Math.floor(Math.random() * this.atk) + this.atk * this.atk_Multiplication;
  }

  // 플레이어의 연속 공격
  doubeAttack() {
    let firstAtk = this.attack();
    let secondAtk = this.attack();
    return [firstAtk + secondAtk];
  }

  // 몬스터의 방어
  defense() {
    // 방어 enum
    const eDefense = {
      eDefFalse: 0,
      eDefTrue: 1,
      eDefTrueCounter: 2
    }
    // 로직
    let defPer = Math.floor(Math.random() * this.def_per);
    if (defPer <= this.def_per) {
      
    }
    else return eDefense.eDefFalse;
  }

  // 플레이어의 도망
  runAwayFunc() {
    let runAwayPer = Math.floor(Math.random() * this.runAway);
    if (runAwayPer <= this.runAway) return true;
    else return false;
  }
}

// 몬스터 클래스
export class Monster {
  constructor() {
    this.hp = 100;
    this.atk = 10;
    this.atk_Multiplication = 0.1;
    this.double_atk = 10;
    this.def = 0;
    this.def_per = 10;
  }

  // 몬스터의 피격
  hit(atk) {
    this.hp -= (atk - 1);
    //this.hp -= (atk - this.def);
  }

  // 몬스터의 공격
  attack() {
    return Math.floor(Math.random() * this.atk) + this.atk * this.atk_Multiplication;
  }

  // 몬스터의 연속 공격
  doubeAttack() {
    let firstAtk = this.attack();
    let secondAtk = this.attack();
    return [firstAtk + secondAtk];
  }

  // 몬스터의 방어
  defense() {
    // 방어 enum
    const eDefense = {
      eDefFalse: 0,
      eDefTrue: 1,
      eDefTrueCounter: 2
    }
    // 로직
    let defPer = Math.floor(Math.random() * this.def_per);
    if (defPer <= this.def_per) {
      
    }
    else return eDefense.eDefFalse;
  }
}