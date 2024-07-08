import { useSelector } from 'react-redux';
import { selectInfo } from '../redux/slices/info';

export const StatusBlock = () => {
  const { status, randomResult, isAuth } = useSelector(selectInfo);

  const renderResult = () => {
    return (
      <>
        {status === 'beginning' ? (
          <h4>Сделайте ставку</h4>
        ) : (
          <>
            <h4>Результат броска кубика: {randomResult}</h4>
            {status === 'win' ? (
              <p>Вы выиграли 1 TND!</p>
            ) : (
              <p>Повезет в следующий раз!</p>
            )}
          </>
        )}
      </>
    );
  };

  return (
    <>
      {isAuth ? renderResult() : <h4>Войдите, чтобы продолжить</h4>}
    </>
  );
};
