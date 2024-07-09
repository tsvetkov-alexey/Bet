import { Modal } from "./Modal"
import close from '../assets/svg/close.svg'
import { useAppDispatch } from "../redux/store"
import { setIsAuth, setModal } from "../redux/slices/info";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { MiniLoader } from "../UI/MiniLoader";

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const[wentWrong, setWentWrong] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios.post('https://api.lettobet.dev.bet4skill.com/api/client-login', {
        login,
        password,
      }, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      
      if (response.status === 200 && response.data.login === login && response.data.login === password) {
        setWentWrong(false)
        setIsLoading(false)

        dispatch(setIsAuth(true))
        dispatch(setModal(false))
      } else {
        setWentWrong(true);
        setIsLoading(false)
      }
    } catch (error) {
      setWentWrong(true);
    } finally {setIsLoading(false)}
  }

  const handleCloseModal = useCallback(() => {
    setLogin('');
    setPassword('');
    setWentWrong(false);
  }, []);

  return (
    <Modal onClose={handleCloseModal}>
      <img src={close} alt='close' onClick={() => dispatch(setModal(false))}/>
      <form className="signIn" onSubmit={handleSubmit}>
        {wentWrong && <span className="wentWrond">Проверьте введенные данные</span>}       
        <input type="login" placeholder="Login" value={login} onChange={handleLogin} className={wentWrong ? 'wrong' : ''} required />
        <input type="password" placeholder="Password" value={password} onChange={handlePassword} className={wentWrong ? 'wrong' : ''} required/>
        <button disabled={!password || !login}>Войти</button>
        {isLoading && <div className="loading">
          <MiniLoader />
        </div>}
      </form>
    </Modal>
  )
}