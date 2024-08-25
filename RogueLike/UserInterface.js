import chalk from 'chalk';

// 플레이어와 몬스터 정보 출력 UI 함수
export async function displayStatus(logs, logsError, stage, player, monster) {
    console.log(chalk.magentaBright(`\n=== Current Status ===`));
    console.log(
      chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(
        `| Player HP: ${player.hp}, Attack: ${player.atk * player.atk_Multiplication}-${player.atk} `,
      ) +
      chalk.redBright(
        `| Monster HP: ${monster.hp}, Attack: ${monster.atk * monster.atk_Multiplication}-${monster.atk} |`,
      ),
    );
    console.log(chalk.magentaBright(`=====================\n`));
  }