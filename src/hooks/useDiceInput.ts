import { setCertainNumValue } from '../redux/slices/info';
import { useAppDispatch } from '../redux/store';
import { useState } from 'react';

export const useDiceInput = (initialValue: string | number = '') => {
  const [value, setValue] = useState<string | number>(initialValue);
  const dispatch = useAppDispatch();

  const validateAndSetValue = (newValue: string) => {
    if (newValue === '' || /^[1-6]$/.test(newValue)) {
      setValue(newValue);
      dispatch(setCertainNumValue(Number(newValue)));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndSetValue(e.target.value);
  };

  return {
    value,
    handleChange,
  };
};
