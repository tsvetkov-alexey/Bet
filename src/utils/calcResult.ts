interface CalcResultProps {
  randomResult: number;
  betType: string;
  currentBet: string;
  balance: number;
  setBalance: (balance: number) => void;
  setStatus: (status: string) => void;
}

export const calcResult = ({ randomResult, betType, currentBet, balance, setBalance, setStatus }: CalcResultProps) => {
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
    default:
      betWon = false;
  }

  const newBalance = betWon ? balance - Number(currentBet) + Number(currentBet) * 2 : balance - Number(currentBet);

  setBalance(newBalance);
  setStatus(betWon ? 'win' : 'lose');
};
