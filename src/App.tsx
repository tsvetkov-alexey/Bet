import { PageLoader } from './UI/PageLoader';
import { useCheckAuth } from './hooks/useCheckAuth';
import { Home } from './pages/Home';
import { selectInfo } from './redux/slices/info';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

function App() {
  useCheckAuth();
  const { pageLoading } = useSelector(selectInfo);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
