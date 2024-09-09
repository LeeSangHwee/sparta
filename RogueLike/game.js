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
  ePLAYER_DIE_END: 1,
  eMONSTER_DIE_END: 2,
  eRUNAWAY_END: 3
}

// 정보 출력 UI 함수
async function choiceFunc(logs, logsError, stage, player, monster) {

  // 플레이어와 몬스터 정보 출력 UI 함수 호출
  await displayStatus(stage, player, monster);

  while(logs.length > 10) logs.shift();//로그 10줄 초과 삭제
  logs.forEach((log) => console.log(log));
  logsError.forEach((log) => console.log(log));//에러 로그용 출력

  console.log(
    chalk.green(
      `\n1. 공격한다 2. 연속 공격한다(${player.getPlayerATK_Double}%) 3. 방어한다(${player.getPlayerDefPer}%) 4. 도망친다(${player.getPlayerRunAway}%) 5. 게임종료`,
    ),
  );
  const choice = readlineSync.question('당신의 선택은? ');
  return choice;
}

async function PlayerManager(logs, logsError, UserChoice, player, monster) {
  //if (1 <= UserChoice && UserChoice <= 4) logs.push(chalk.green(`${UserChoice}를 선택하셨습니다.`));
  // 플레이어의 선택에 따른 함수 호출
  switch (Number(UserChoice)) {
    case eChoice.eATTACK: {// 일반공격
      let HitDamage = monster.hit(player.attack());
      logs.push(chalk.cyan(`플레이어는 ${HitDamage} 데미지를 몬스터에게 입혔다!`));
      break;
    }
    // case eChoice.eDOUBLE_ATK: {// 연속공격
    //   logs.push(chalk.cyan(`플레이어는 ${HitDamage1} 데미지를 몬스터에게 입혔다!!`));
    //   logs.push(chalk.cyan(`플레이어는 ${HitDamage2} 데미지를 몬스터에게 입혔다!!`));
    //   logs.push(chalk.red(`연속 공격 실패!!`));
    //   break;
    // }
    // case eChoice.eDEFENSE: {// 방어하기      
    //   logs.push(chalk.yellow(`플레이어는 방어태세에 들어갔다!!`));
    //   logs.push(chalk.cyan(`플레이어가 방어에 성공했다!!!`));
    //   logs.push(chalk.cyan(`플레이어는 반격으로인해 ${HitDamage} 데미지를 몬스터에게 입혔다!`));
    //   break;
    // }
    // case eChoice.eRUNAWAY: {// 도망치기
    //   logs.push(chalk.cyan(`플레이어는 성공적으로 몬스터에게서 도망쳤다!!!`));
    //   logs.push(chalk.red(`플레이어는 도망치기를 실패하였다!!!`));
    //   break;
    // }
    case eChoice.eEXIT: {
      process.exit(0); // 게임 종료
    }
    default: {// 예외처리 에러코드 호출용
      logsError.push(chalk.red(`switch: default - Number(UserChoice) : ${Number(UserChoice)}`));
      break;
    }
  }
}

async function MonsterManager(logs, logsError, player, monster) {
  // 행동 처리를 위한 몬스터의 값 초기화
  const MonsterChoice = 3;//Math.floor(Math.random() * 3);

  // 몬스터의 선택에 따른 함수 호출
  // switch (Number(MonsterChoice)) {
  //   case eChoice.eATTACK: {// 일반공격
  //     logs.push(chalk.red(`몬스터는 ${HitDamage} 데미지를 플레이어에게 입혔다!`));
  //     break;
  //   }
  //   case eChoice.eDOUBLE_ATK: {// 연속공격
  //     logs.push(chalk.red(`몬스터는 ${HitDamage1} 데미지를 플레이어에게 입혔다!!`));
  //     logs.push(chalk.red(`몬스터는 ${HitDamage2} 데미지를 플레이어에게 입혔다!!`));
  //     logs.push(chalk.cyan(`연속 공격 실패!!`));
  //     break;
  //   }
  //   case eChoice.eDEFENSE: {// 방어하기      
  //     logs.push(chalk.yellow(`몬스터는 방어태세에 들어갔다!!`));
  //     logs.push(chalk.red(`몬스터가 방어에 성공했다!!!`));
  //     logs.push(chalk.red(`몬스터는 반격으로인해 ${HitDamage} 데미지를 플레이어에게 입혔다!`));
  //     break;
  //   }
  //   default: {// 예외처리 에러코드 호출용
  //     logsError.push(chalk.red(`switch: default - Number(UserChoice) : ${Number(MonsterChoice)}`));
  //     break;
  //   }
  // }
}

// 게임 시작 함수 이후 들어가는 전투 함수
const battle = async (stage, player, monster) => {
  let logs = [];
  let logsError = [];

  while (player.CurrentHp > 0 && monster.CurrentHp > 0) {
    console.clear();
    // 정보 출력 UI 함수 호출
    const UserChoice = await choiceFunc(logs, logsError, stage, player, monster);
    // 플레이어 로직 함수
    await PlayerManager(logs, logsError, UserChoice, player, monster);
    // 몬스터 로직 함수    
    await MonsterManager(logs, logsError, player, monster);
    
    // if(battleEndState == eStage.eRUNAWAY_END) return eStage.eRUNAWAY_END;
    // else if(0 >= player.CurrentHp) return eStage.ePLAYER_DIE_END;
    // else if(0 >= monster.CurrentHp) return eStage.eMONSTER_DIE_END;
  }
};

// 게임 시작 함수
export async function startGame() {
  console.clear();

  const player = new Player();
  let monster = new Monster();

  let stage = 1;
  await battle(stage, player, monster);
  // while (stage <= 10) {
  //   const battleEndState = await battle(stage, player, monster);
  //   // 스테이지 클리어 및 게임 종료 조건
  //   if (battleEndState) {
  //     // 보상으로 받을 능력치 랜덤으로 뽑기
  //     const RewardStat = Math.floor(Math.random() * 6 + 1);
  //     switch (battleEndState) {
  //       case eStage.eBATTLE_END: {
  //         // 몬스터 제거 후 스테이지 클리어
  //         await player.StageClearStatRewards(RewardStat);
  //         break;
  //       }
  //       case eStage.eRUNAWAY_END: {
  //         // 도망 성공 스테이지 클리어
  //         await player.StageClearStatRewards(RewardStat);
  //         break;
  //       }
  //     }
  //     // 최대 체력의 10% 회복
  //     if (player.getPlayerHP_CURRENT <= player.getPlayerHP_MAX - player.getPlayerHP_MAX * 0.1)
  //       player.setPlayerHP_CURRENT = player.getPlayerHP_MAX * 0.1;
  //     // 다음 스테이지로~
  //     stage++;
  //     // 이번 스테이지 몬스터 생성
  //     monster = new Monster();
  //     // 몬스터 스텟 증가
  //     const MonsterRandomStat = Math.floor(Math.random() * 5 + 1);
  //     monster.MonsterStatUp(MonsterRandomStat);
  //   }
  // }
}