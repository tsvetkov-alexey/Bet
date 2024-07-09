import { useSelector } from "react-redux"
import { selectInfo, setModal } from "../redux/slices/info"
import { useAppDispatch } from "../redux/store";

export const Header = () => {
  const { balance, isAuth } = useSelector(selectInfo)
  const dispatch = useAppDispatch();

  return (
    <header>
      <h5>Test Game</h5>
      {isAuth ? 
        <h5>{balance} (TND)</h5> : 
        <div className="auth">
          <button className="signIn" onClick={() => dispatch(setModal(true))}>Вход</button>
          <button className="signUp" disabled>Регистрация</button>
        </div>
      }
    </header>
  )
}
