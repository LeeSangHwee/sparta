// 오브젝트 부모 클래스
export class Object {
  constructor() {
    this.atk = 10;                  // 최소 공격력
    this.atk_Multiplication = 0.1;  // 최대 공격력 배율
    this.double_atk = 10;           // 연속 공격 확률
    this.HitState = false;          // 피격 상태
    this.MaxHp = 100;               // 최대 체력
    this.CurrentHp = this.MaxHp;    // 현재 체력    
    this.def = 0;                   // 방어력
    this.def_per = 10;              // 방어 확률
    this.def_State = false;         // 방어 상태
    this.runAway = 10;              // 도망 확률
  }

  // 오브젝트의 공격
  async attack() {
    return Math.floor((Math.random() * (this.atk + this.atk * this.atk_Multiplication) + this.atk));// 공격 값 리턴
  }

  // 오브젝트의 피격
  async hit(atk) {
    if(this.def_State) return 0;//방어 성공 상태시 받는 데미지 0 값 return
    else {
      this.CurrentHp -= (atk - this.def);// 현재 체력 = 현재 체력 - (공격력 - 방어력)
      return atk - this.def;
    }
  }

  // 오브젝트의 방어
  async defense() {
    let defPer = Math.floor(Math.random() * 100);// 방어 확률 계산
    if (defPer < this.def_per) {// 방어 성공
      this.def_State = true;
    }
    else {// 방어 실패 
      this.def_State = false;
    }
    return this.def_State;// 상태 값 리턴
  }

  // 오브젝트의 도망
  async runAwayFunc() {
    let runAwayPer = Math.floor(Math.random() * 100);// 도망 확률 계산
    if (runAwayPer < this.runAway) {// 도망 성공      
      return true;// 도망 성공 상태 값 리턴
    }
    else {// 도망 실패
      return false;// 도망 실패 상태 값 리턴
    }
  }
}