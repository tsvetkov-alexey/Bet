import { useState, useEffect } from 'react';

export const useFormValidation = (login: string, password: string) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(login.length >= 6 && password.length >= 6);
  }, [login, password]);

  return {
    isFormValid,
  };
};
