import { Modal } from "./Modal"
import close from '../assets/svg/close.svg'
import { useAppDispatch } from "../redux/store"
import { setModal } from "../redux/slices/info";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <img src={close} alt='close' onClick={() => dispatch(setModal(false))}/>
      <form className="signIn">
        <input type="login" placeholder="Login"/>
        <input type="password" placeholder="Password"/>
        <button>Войти</button>
      </form>
    </Modal>
  )
}
