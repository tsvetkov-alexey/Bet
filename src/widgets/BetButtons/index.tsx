import {
  setCertainNum,
  setEvenNum,
  setFourToSix,
  setOddNum,
  setOneToThree,
} from '../../app/redux/slices/options';
import { useDispatch } from 'react-redux';

interface BetButtonsProps {
  evenNum: boolean;
  oddNum: boolean;
  oneToThree: boolean;
  fourToSix: boolean;
  certainNum: boolean;
  certainNumValue: string | number;
  handleCertainNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BetButtons = ({
  evenNum,
  oddNum,
  oneToThree,
  fourToSix,
  certainNum,
  certainNumValue,
  handleCertainNumChange,
}: BetButtonsProps) => {
  const dispatch = useDispatch();

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

  return (
    <div className="bet-buttons">
      <div className="first-row">
        <button className={evenNum ? 'active' : ''} onClick={handleEvenNum}>
          Четное
        </button>
        <button className={oddNum ? 'active' : ''} onClick={handleOddNum}>
          Нечетное
        </button>
      </div>
      <div className="second-row">
        <button className={oneToThree ? 'active' : ''} onClick={handleOneToThree}>
          От 1 до 3
        </button>
        <button className={fourToSix ? 'active' : ''} onClick={handleFourToSix}>
          От 4 до 6
        </button>
      </div>
      <div className="third-row">
        <button className={`certain ${certainNum ? 'active' : ''}`} onClick={handleCertain}>
          Конкретное число
        </button>
        <input
          className={certainNum ? 'activeInput' : ''}
          placeholder="1"
          value={certainNumValue}
          onChange={handleCertainNumChange}
        />
      </div>
    </div>
  );
};
