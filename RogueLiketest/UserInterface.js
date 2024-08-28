import chalk from 'chalk';

// 플레이어와 몬스터 정보 출력 UI 함수
export async function displayStatus(stage, player, monster) {
    console.log(chalk.magentaBright(`\n=== Current Status ===`));
    console.log(
      chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(
        `| Player HP: ${player.CurrentHp}, Attack: ${player.atk}-${player.atk + player.atk * player.atk_Multiplication} `,
      ) +
      chalk.redBright(
        `| Monster HP: ${monster.CurrentHp}, Attack: ${player.atk}-${player.atk + player.atk * player.atk_Multiplication} |`,
      ),
    );
    console.log(chalk.magentaBright(`=====================\n`));
  }