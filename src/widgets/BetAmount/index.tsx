import { setCurrentBet } from '../../app/redux/slices/random';
import { useAppDispatch } from '../../app/redux/store';

export const BetAmount = () => {
  const dispatch = useAppDispatch();
  const betArr = ['1.00', '2.00', '3.00', '5.00', '10.00', '25.00', '60.00', '100.00'];

  return (
    <div className="options">
      {betArr.map((el, i) => (
        <span key={i} onClick={() => dispatch(setCurrentBet(el))}>
          {el}
        </span>
      ))}
    </div>
  );
};
