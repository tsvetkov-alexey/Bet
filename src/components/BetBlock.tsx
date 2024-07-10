import arrowDown from '../assets/svg/arrowDown.svg';
import arrowUp from '../assets/svg/arrowUp.svg';
import { BetAmount } from './BetAmount';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectInfo, setCertainNum, setEvenNum, setFourToSix, setOddNum, setOneToThree, setStatus, setBalance } from '../redux/slices/info';
import { useAppDispatch } from '../redux/store';
import { Cube } from './Cube';
import { StatusBlock } from './StatusBlock';
import { calcResult } from '../utils/calcResult';
import { RootState } from '../redux/store';

export const BetBlock = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [rollCount, setRollCount] = useState(0);

  const cubeRef = useRef<{ rollDice: () => void, isRolling: boolean }>(null);
  const betAmountRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const { isAuth, evenNum, oddNum, oneToThree, fourToSix, certainNum, currentBet, randomResult, balance } = useSelector((state: RootState) => selectInfo(state));

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

  // Логика кнопок

  const updateBetState = (type: string, currentValue: boolean) => {
    dispatch(setEvenNum(type === 'evenNum' ? !currentValue : false));
    dispatch(setOddNum(type === 'oddNum' ? !currentValue : false));
    dispatch(setOneToThree(type === 'oneToThree' ? !currentValue : false));
    dispatch(setFourToSix(type === 'fourToSix' ? !currentValue : false));
    dispatch(setCertainNum(type === 'certainNum' ? !currentValue : false));
  };

  const handleEvenNum = () => updateBetState('evenNum', evenNum);
  const handleOddNum = () => updateBetState('oddNum', oddNum);
  const handleOneToThree = () => updateBetState('oneToThree', oneToThree);
  const handleFourToSix = () => updateBetState('fourToSix', fourToSix);
  const handleCertain = () => updateBetState('certainNum', certainNum);

  const handleMakeBet = () => {
    if (cubeRef.current && !cubeRef.current.isRolling) {
      cubeRef.current.rollDice();
      setTimeout(() => {
        setRollCount((prev) => prev + 1)
      }, 1500)
    }
  };

 useEffect(() => {
    if (rollCount > 0) {
      const betType = evenNum ? 'evenNum' : oddNum ? 'oddNum' : oneToThree ? 'oneToThree' : fourToSix ? 'fourToSix' : 'certainNum';
      calcResult({
        randomResult,
        betType,
        currentBet,
        balance,
        setBalance: (newBalance) => dispatch(setBalance(newBalance)),
        setStatus: (status) => dispatch(setStatus(status)),
      });
    }
  }, [rollCount]);

  return (
    <div className='bet-container'>
      {<StatusBlock />}
      <div className={`bet ${isAuth ? '' : 'blur'}`}>
        {!isAuth && <div className="overlay"></div>}
        <Cube ref={cubeRef} />
        <div className='bet-info'>
          <span className='bet-label'>Размер ставки</span>
          <div className={`bet-amount ${optionsVisible ? 'active' : ''} `}
            onClick={() => setOptionsVisible(!optionsVisible)}
            ref={betAmountRef}>
            <div className="startSum">
              <span>{currentBet}</span>
              {optionsVisible ? <img src={arrowUp} alt='arrowUp' />
                :
                <img src={arrowDown} alt='arrowDown' />}
            </div>
            {optionsVisible && <BetAmount />}
          </div>

          <div className="bet-options">
            <span>Варианты ставок</span>
            <div className="bet-buttons">
              <div className="first-row">
                <button className={evenNum ? 'active' : ''} onClick={handleEvenNum}>Четное</button>
                <button className={oddNum ? 'active' : ''} onClick={handleOddNum}>Нечетное</button>
              </div>
              <div className="second-row">
                <button className={oneToThree ? 'active' : ''} onClick={handleOneToThree}>От 1 до 3</button>
                <button className={fourToSix ? 'active' : ''} onClick={handleFourToSix}>От 4 до 6</button>
              </div>
              <div className="third-row">
                <button className={`certain ${certainNum ? 'active' : ''}`} onClick={handleCertain}>Конкретное число</button>
              </div>
            </div>
            <button className='makeButton' onClick={handleMakeBet} disabled={!evenNum && !oddNum && !oneToThree && !fourToSix && !certainNum}>Сделать ставку</button>
          </div>
        </div>
      </div>
    </div>
  );
};
