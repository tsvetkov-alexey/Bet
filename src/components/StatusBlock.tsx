import { MiniLoader } from '../UI/MiniLoader';
import { selectInfo } from '../redux/slices/info';
import { useSelector } from 'react-redux';

export const StatusBlock = () => {
  const { status, randomResult, isAuth, winAmount } = useSelector(selectInfo);

  const renderResult = () => {
    return (
      <>
        {status === 'beginning' ? (
          <h4>Сделайте ставку</h4>
        ) : (
          <>
            {status === 'pending' ? (
              <>
                <h4>Результат броска кубика: ...</h4>
                <div className="rollWaiting">
                  <MiniLoader />
                </div>
              </>
            ) : (
              <>
                <h4>Результат броска кубика: {randomResult}</h4>
                {status === 'win' ? (
                  <p>Вы выиграли {winAmount} TND!</p>
                ) : (
                  <p>Повезет в следующий раз!</p>
                )}
              </>
            )}
          </>
        )}
      </>
    );
  };

  return <>{isAuth ? renderResult() : <h4>Войдите, чтобы продолжить</h4>}</>;
};
