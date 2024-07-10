import { BetBlock } from '../components/BetBlock';
import { Header } from '../components/Header';
import { SignIn } from '../components/SignIn';

export const Home = () => {
  return (
    <>
      <SignIn />
      <Header />
      <BetBlock />
    </>
  );
};
