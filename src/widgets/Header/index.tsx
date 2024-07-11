import { selectInfo, setModal } from '../../app/redux/slices/info';
import { selectRandom } from '../../app/redux/slices/random';
import { useAppDispatch } from '../../app/redux/store';
import { useSelector } from 'react-redux';

export const Header = () => {
  const { isAuth } = useSelector(selectInfo);
  const { balance } = useSelector(selectRandom);

  const dispatch = useAppDispatch();

  return (
    <header>
      <h5>Test Game</h5>
      {isAuth ? (
        <h5>{balance} (TND)</h5>
      ) : (
        <div className="auth">
          <button className="signIn" onClick={() => dispatch(setModal(true))}>
            Вход
          </button>
          <button className="signUp" disabled>
            Регистрация
          </button>
        </div>
      )}
    </header>
  );
};
