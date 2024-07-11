import { BetBlock } from '../../widgets/BetBlock';
import { Header } from '../../widgets/Header';
import { SignIn } from '../../widgets/SignIn';

export const Home = () => {
  return (
    <>
      <SignIn />
      <Header />
      <BetBlock />
    </>
  );
};
