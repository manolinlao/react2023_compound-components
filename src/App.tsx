import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { NavBar } from './ui/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
