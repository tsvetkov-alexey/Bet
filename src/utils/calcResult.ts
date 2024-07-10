interface CalcResultProps {
  randomResult: number;
  certainNumValue: string | number;
  betType: string;
  currentBet: string;
  // balance: number;
  balance: number | null;
  setBalance: (balance: number) => void;
  setStatus: (status: string) => void;
  setWinAmount: (winAmount: number) => void;
}

export const calcResult = ({
  randomResult,
  certainNumValue,
  betType,
  currentBet,
  balance,
  setBalance,
  setStatus,
  setWinAmount,
}: CalcResultProps) => {
  if (balance === null) {
    return;
  }

  let betWon = false;

  switch (betType) {
    case 'evenNum':
      betWon = randomResult % 2 === 0;
      break;
    case 'oddNum':
      betWon = randomResult % 2 !== 0;
      break;
    case 'oneToThree':
      betWon = randomResult >= 1 && randomResult <= 3;
      break;
    case 'fourToSix':
      betWon = randomResult >= 4 && randomResult <= 6;
      break;
    case 'certainNum':
      betWon = randomResult === Number(certainNumValue);
      break;
    default:
      betWon = false;
  }

  if (betType === 'certainNum' && betWon) {
    let newBalance = balance - Number(currentBet) + Number(currentBet) * 3;
    setBalance(newBalance);

    let winAmount = Number(currentBet) * 3 - Number(currentBet);
    setWinAmount(winAmount);
  } else {
    let newBalance = betWon
      ? balance - Number(currentBet) + Number(currentBet) * 2
      : balance - Number(currentBet);
    setBalance(newBalance);

    let winAmount = betWon ? Number(currentBet) * 2 - Number(currentBet) : 0 - Number(currentBet);
    setWinAmount(winAmount);
  }

  setStatus(betWon ? 'win' : 'lose');
};
