interface CalcResultProps {
  diceResult: number;
  betType: string;
  currentBet: string;
  balance: number;
  setBalance: (balance: number) => void;
  setStatus: (status: string) => void;
}

export const calcResult = ({ diceResult, betType, currentBet, balance, setBalance, setStatus }: CalcResultProps) => {
  let betWon = false;
  console.log(diceResult)

  switch (betType) {
    case 'evenNum':
      betWon = diceResult % 2 === 0;
      break;
    case 'oddNum':
      betWon = diceResult % 2 !== 0;
      break;
    case 'oneToThree':
      betWon = diceResult >= 1 && diceResult <= 3;
      break;
    case 'fourToSix':
      betWon = diceResult >= 4 && diceResult <= 6;
      break;
    default:
      betWon = false;
  }

  const newBalance = betWon ? balance + Number(currentBet) * 2 : balance - Number(currentBet);

  setBalance(newBalance);
  setStatus(betWon ? 'win' : 'lose');
};
