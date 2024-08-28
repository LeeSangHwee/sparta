import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { displayStatus } from "./UserInterface.js";
import { Player } from "./UserClass.js";
import { Monster } from "./MonsterClass.js";

// 행동 선택 enum
const eChoice = {
  eATTACK: 1,
  eDOUBLE_ATK: 2,
  eDEFENSE: 3,
  eRUNAWAY: 4,
  eEXIT: 5
}

// 전투 종료 상태 enum
const eStage = {
  eBATTLE_END: 1,
  eRUNAWAY_END: 2
}

// 정보 출력 UI 함수
async function choiceFunc(logs, logsError, stage, player, monster) {

  // 플레이어와 몬스터 정보 출력 UI 함수 호출
  await displayStatus(stage, player, monster);

  logs.forEach((log) => console.log(log));
  logsError.forEach((log) => console.log(log));

  console.log(
    chalk.green(
      `\n1. 공격한다 2. 연속 공격한다(${player.getPlayerATK_Double}%) 3. 방어한다(${player.getPlayerDefPer}%) 4. 도망친다(${player.getPlayerRunAway}%) 5. 게임종료`,
    ),
  );
  const choice = readlineSync.question('당신의 선택은? ');
  return choice;
}

// 게임 시작 함수 이후 들어가는 전투 함수
const battle = async (stage, player, monster) => {
  let logs = [];
  let logsError = [];

  while (player.CurrentHp > 0 || monster.CurrentHp > 0) {
    console.clear();
    // 정보 출력 UI 함수 호출
    const UserChoice = await choiceFunc(logs, logsError, stage, player, monster);

    // 행동 처리를 위한 플레이어의 선택
    if (1 <= UserChoice && UserChoice <= 4) logs.push(chalk.green(`${UserChoice}를 선택하셨습니다.`));
    player.hitState = false;

    // 플레이어의 선택에 따른 함수 호출
    switch (Number(UserChoice)) {
      case eChoice.eATTACK: {// 일반공격
        monster.hitState = true;
        logsError.push(chalk.red(`player.eATTACK`, monster.hitState));
        break;
      }
      case eChoice.eDEFENSE: {// 방어
        player.hitState = true;
        logsError.push(chalk.red(`player.eDEFENSE`, player.hitState));
        break;
      }
      case eChoice.eEXIT: {
        logsError.push(chalk.red(`switch: eChoice.eEXIT`));
        process.exit(0); // 게임 종료
      }
    }

    // 행동 처리를 위한 몬스터의 선택
    const MonsterChoice = 3;
    monster.hitState = false;

    // 몬스터의 선택에 따른 함수 호출
    switch (Number(MonsterChoice)) {
      case eChoice.eATTACK: {// 일반공격
        player.hitState = true;
        logsError.push(chalk.red(`monster.eATTACK`, player.hitState));
        break;
      }
      case eChoice.eDEFENSE: {// 방어
        logsError.push(chalk.red(`monster.eDEFENSE`, monster.hitState));
        break;
      }
    }
  }
};

// 게임 시작 함수
export async function startGame() {
  console.clear();

  const player = new Player();
  const monster = new Monster();

  let stage = 1;
  while (stage <= 10) {
    await battle(stage, player, monster);    
    stage++;
  }
}