import { selectInfo, setStatus } from '../../app/redux/slices/info';
import { selectOptions } from '../../app/redux/slices/options';
import { selectRandom, setBalance, setWinAmount } from '../../app/redux/slices/random';
import { useAppDispatch } from '../../app/redux/store';
import { useDiceInput } from '../../shared/hooks/useDiceInput';
import arrowDown from '../../shared/svg/arrowDown.svg';
import arrowUp from '../../shared/svg/arrowUp.svg';
import { calcResult } from '../../shared/utils/calcResult';
import { BetAmount } from '../BetAmount';
import { BetButtons } from '../BetButtons';
import { Cube } from '../Cube';
import { StatusBlock } from '../StatusBlock';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const BetBlock = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [rollCount, setRollCount] = useState(0);

  const cubeRef = useRef<{ rollDice: () => void; isRolling: boolean }>(null);
  const betAmountRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const { isAuth } = useSelector(selectInfo);
  const { evenNum, oddNum, oneToThree, fourToSix, certainNum } = useSelector(selectOptions);
  const { currentBet, randomResult, balance } = useSelector(selectRandom);

  const { value: certainNumValue, handleChange: handleCertainNumChange } = useDiceInput('');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (betAmountRef.current && !betAmountRef.current.contains(e.target as Node)) {
        setOptionsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMakeBet = () => {
    if (cubeRef.current && !cubeRef.current.isRolling) {
      cubeRef.current.rollDice();
      setTimeout(() => {
        setRollCount((prev) => prev + 1);
      }, 1500);
    }
  };

  useEffect(() => {
    if (rollCount > 0) {
      const betType = evenNum
        ? 'evenNum'
        : oddNum
          ? 'oddNum'
          : oneToThree
            ? 'oneToThree'
            : fourToSix
              ? 'fourToSix'
              : 'certainNum';
      calcResult({
        randomResult,
        certainNumValue,
        betType,
        currentBet,
        balance,
        setBalance: (newBalance) => dispatch(setBalance(newBalance)),
        setStatus: (status) => dispatch(setStatus(status)),
        setWinAmount: (winAmount) => dispatch(setWinAmount(winAmount)),
      });
    }
  }, [rollCount]);

  return (
    <div className="bet-container">
      {<StatusBlock />}
      <div className={`bet ${isAuth ? '' : 'blur'}`}>
        {!isAuth && <div className="overlay"></div>}
        <Cube ref={cubeRef} />
        <div className="bet-info">
          <span className="bet-label">Размер ставки</span>
          <div
            className={`bet-amount ${optionsVisible ? 'active' : ''} `}
            onClick={() => setOptionsVisible(!optionsVisible)}
            ref={betAmountRef}>
            <div className="startSum">
              <span>{currentBet}</span>
              {optionsVisible ? (
                <img src={arrowUp} alt="arrowUp" />
              ) : (
                <img src={arrowDown} alt="arrowDown" />
              )}
            </div>
            {optionsVisible && <BetAmount />}
          </div>

          <div className="bet-options">
            <span>Варианты ставок</span>
            <BetButtons
              evenNum={evenNum}
              oddNum={oddNum}
              oneToThree={oneToThree}
              fourToSix={fourToSix}
              certainNum={certainNum}
              certainNumValue={certainNumValue}
              handleCertainNumChange={handleCertainNumChange}
            />
            <button
              className="makeButton"
              onClick={handleMakeBet}
              disabled={
                !evenNum &&
                !oddNum &&
                !oneToThree &&
                !fourToSix &&
                !(certainNum && certainNumValue !== '')
              }>
              Сделать ставку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
