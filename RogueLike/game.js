import chalk from 'chalk';
import readlineSync from 'readline-sync';
import { displayStatus } from "./UserInterface.js";
import { Player, Monster } from "./ObjectClass.js";

// 행동 선택 enum
const eChoice = {
  eATTACK: 1,
  eDOUBLE_ATK: 2,
  eDEFENSE: 3,
  eRUNAWAY: 4,
  eEXIT: 5
}

// 정보 출력 UI 함수
function choiceFunc (logs, logsError, stage, player, monster) {

  // 플레이어와 몬스터 정보 출력 UI 함수 호출
  displayStatus(logs, logsError, stage, player, monster);

  logs.forEach((log) => console.log(log));
  logsError.forEach((log) => console.log(log));

  console.log(
    chalk.green(
      `\n1. 공격한다 2. 연속 공격한다. 3. 방어한다. 4. 도망친다. 5. 게임종료`,
    ),
  );
  const choice = readlineSync.question('당신의 선택은? ');
  return choice;
}

// 게임 시작 함수 이후 들어가는 전투 함수
const battle = async (stage, player, monster) => {
  let logs = [];
  let logsError = [];

  while (player.hp > 0) {
    console.clear();

    // 정보 출력 UI 함수 호출
    const choice = choiceFunc(logs, logsError, stage, player, monster);

    // 다음 행동 처리를 위한 플레이어의 선택
    if (1 <= choice && choice <= 4) logs.push(chalk.green(`${choice}를 선택하셨습니다.`));

    // 플레이어 선택에 따른 함수 호출
    switch (Number(choice)) {
      case eChoice.eATTACK: {
        logsError.push(chalk.red(`switch: eChoice.eATTACK`));
        break;
      }
      case eChoice.eDOUBLE_ATK: {
        logsError.push(chalk.red(`switch: eChoice.eDOUBLE_ATK`));
        break;
      }
      case eChoice.eDEFENSE: {
        logsError.push(chalk.red(`switch: eChoice.eDEFENSE`));
        break;
      }
      case eChoice.eRUNAWAY: {
        logsError.push(chalk.red(`switch: eChoice.eRUNAWAY`));
        break;
      }
      case eChoice.eEXIT: {
        logsError.push(chalk.red(`switch: eChoice.eEXIT`));
        process.exit(0); // 게임 종료
        break;
      }
      default: {
        logsError.push(chalk.red(`switch: default - Number(choice) : ${Number(choice)}`));
        break;
      }
    }
  }
};

// 게임 시작 함수
export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건

    stage++;
  }
}