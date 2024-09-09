// 오브젝트 부모 클래스
export class Object {
  constructor() {
    this.atk = 10;                  // 최소 공격력
    this.atk_Multiplication = 2.0;  // 최대 공격력 배율
    this.double_atk = 10;           // 연속 공격 확률
    this.MaxHp = 100;               // 최대 체력
    this.CurrentHp = this.MaxHp;    // 현재 체력    
    this.def = 0;                   // 방어력
    this.def_per = 10;              // 방어 확률
    this.def_State = false;         // 방어 상태
    this.runAway = 10;              // 도망 확률
  }
//----------------------------------------------------------------------------
  // 오브젝트의 공격
  async attack() {
    return Math.floor((Math.random() * ((this.atk * this.atk_Multiplication) - this.atk) + this.atk + 1));// 공격 값 리턴
  }

  // 오브젝트의 피격
  async hit(atk) {
    if (this.def_State) return 0;//방어 성공 상태시 받는 데미지 0 값 return
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
  //----------------------------------------------------------------------------
  get getATK_Double() {// 연속 공격 확률 리턴
    return this.double_atk;
  }
  get getHP_MAX() {// 최대 체력 값 리턴
    return this.MaxHp;
  }
  get getHP_CURRENT() {// 현재 체력 값 리턴
    return this.CurrentHp;
  }
  get getDefPer() {//방어 확률 리턴
    return this.def_per;
  }
  get getDefState() {//방어 상태 리턴
    return this.def_State;
  }
  get getRunAway() {// 도망 확률 리턴
    return this.runAway;
  }
  //----------------------------------------------------------------------------
  set setATK_Min(AddAtkMin) {// 최소 공격력 증가
    this.atk += AddAtkMin;
  }
  set setATK_Multi(AddAtkMulti) {// 최대 공격력 배율 증가
    this.atk_Multiplication += AddAtkMulti;
  }
  set setATK_Double(AddAtkDouble) {// 연속 공격 확률 증가
    this.double_atk += AddAtkDouble;
  }
  set setHP_CURRENT(AddHealth) {// 현재 체력 증가
    this.CurrentHp += AddHealth;
  }
  set setHP_MAX_AND_CURRENT(AddHealth) {// 최대 체력 및 현재 증가
    this.MaxHp += AddHealth;
    this.CurrentHp += AddHealth;
  }
  set setDefState(defState) {//방어 상태 설정
    this.def_State;
  }
  set setDEF(AddDef) {// 방어력 증가
    this.def += AddDef;
  }
  set setRunAway(AddRunAway) {// 도망 확률 증가
    this.runAway += AddRunAway;
  }
  //----------------------------------------------------------------------------
  // 스테이지 클리어 보상 함수 - 스텟 보상
  async StageClearAfterStatUp(RewardStat) {
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
      case eRandomStat.eATK_MIN: {
        // 최소 공격력 증가      
        setATK_Min = Math.floor(Math.random() * 20 + 5);
        break;
      }
      case eRandomStat.eATK_MULTI: {
        // 최대 공격력 배율 증가
        setATK_Multi = Math.floor(Math.random() * 1 + 0.1);
        break;
      }
      case eRandomStat.eATK_DOUBLE: {
        // 연속 공격 확률 증가
        setATK_Double = Math.floor(Math.random() * 7 + 3);
        break;
      }
      case eRandomStat.eHEALTH: {
        // 체력 증가
        setHP_MAX_AND_CURRENT = Math.floor(Math.random() * 50 + 20);
        break;
      }
      case eRandomStat.eDEF: {
        // 방어 증가
        setDEF = Math.floor(Math.random() * 10 + 3);
        break;
      }
      case eRandomStat.eRUNAWWAY: {
        // 도망 증가
        setRunAway = Math.floor(Math.random() * 3 + 1);
        break;
      }
    }
  }
}