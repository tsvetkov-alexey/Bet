import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch } from "../redux/store";
import { setIsAuth, setPageLoading } from "../redux/slices/info";

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        dispatch(setPageLoading(true));
        const response = await axios.get('https://api.lettobet.dev.bet4skill.com/api/auth/me', {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          dispatch(setIsAuth(true));
          dispatch(setPageLoading(false));
        } else {
          dispatch(setIsAuth(false));
        }
      } catch (error) {
        dispatch(setIsAuth(false));
      } finally {
        dispatch(setPageLoading(false))
      }
    };

    checkAuth();
  }, []);
};
