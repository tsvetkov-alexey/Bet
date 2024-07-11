import { setStatus } from '../../app/redux/slices/info';
import { setRandomResult } from '../../app/redux/slices/random';
import { useAppDispatch } from '../../app/redux/store';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

export const Cube = forwardRef((_, ref) => {
  const diceSides = [
    // Сторона с одним очком
    <svg
      width="131"
      height="131"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="19" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="65.34" cy="65.34" r="7.34" fill="black" />
    </svg>,

    //  Сторона с двумя очками
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="18.8701" y="18.87" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="95.7902" cy="95.7899" r="7.34" fill="black" />
      <circle cx="34.2101" cy="34.21" r="7.34" fill="black" />
    </svg>,

    // Сторона с тремя очками
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="18.8701" y="18.87" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="95.7902" cy="95.7899" r="7.34" fill="black" />
      <circle cx="65.2101" cy="65.21" r="7.34" fill="black" />
      <circle cx="34.2101" cy="34.21" r="7.34" fill="black" />
    </svg>,

    // Сторона с четырьмя очками
    <svg
      width="131"
      height="131"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="19" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="95.9201" cy="95.92" r="7.34" fill="black" />
      <circle cx="95.9201" cy="34.34" r="7.34" fill="black" />
      <circle cx="34.34" cy="95.92" r="7.34" fill="black" />
      <circle cx="34.34" cy="34.34" r="7.34" fill="black" />
    </svg>,

    // Сторона с пятью очками
    <svg
      width="131"
      height="131"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="19" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="95.9201" cy="95.92" r="7.34" fill="black" />
      <circle cx="95.9201" cy="34.34" r="7.34" fill="black" />
      <circle cx="65.34" cy="65.34" r="7.34" fill="black" />
      <circle cx="34.34" cy="95.92" r="7.34" fill="black" />
      <circle cx="34.34" cy="34.34" r="7.34" fill="black" />
    </svg>,

    // Сторона с шестью очками
    <svg
      width="131"
      height="131"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="19" width="92.26" height="92.26" rx="4.67" fill="white" />
      <circle cx="95.9201" cy="95.92" r="7.34" fill="black" />
      <circle cx="95.9201" cy="34.34" r="7.34" fill="black" />
      <circle cx="34.34" cy="65.34" r="7.34" fill="black" />
      <circle cx="95.34" cy="65.34" r="7.34" fill="black" />
      <circle cx="34.34" cy="95.92" r="7.34" fill="black" />
      <circle cx="34.34" cy="34.34" r="7.34" fill="black" />
    </svg>,
  ];

  const [currentSide, setCurrentSide] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const diceRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const rollDice = () => {
    setIsRolling(true);
    dispatch(setStatus('pending'));

    setTimeout(() => {
      const randomSide = Math.floor(Math.random() * diceSides.length);
      setCurrentSide(randomSide);
      setIsRolling(false);

      const trueResult = randomSide + 1;
      dispatch(setRandomResult(trueResult));
    }, 1500);
  };

  useEffect(() => {
    if (diceRef.current) {
      diceRef.current.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
    }
  }, [currentSide]);

  useImperativeHandle(ref, () => ({
    rollDice,
    isRolling,
  }));

  return (
    <div className="dice-container">
      <div className={`dice ${isRolling ? 'rolling' : ''}`} data-side={currentSide + 1}>
        <div className="face one">{diceSides[0]}</div>
        <div className="face two">{diceSides[1]}</div>
        <div className="face three">{diceSides[2]}</div>
        <div className="face four">{diceSides[3]}</div>
        <div className="face five">{diceSides[4]}</div>
        <div className="face six">{diceSides[5]}</div>
      </div>
    </div>
  );
});
