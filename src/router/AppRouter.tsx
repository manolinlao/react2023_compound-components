import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { ShoppingPage } from '../pages/ShoppingPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/shopping' element={<ShoppingPage />} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='/users' element={<h1>Users Page</h1>} />
      <Route path='/*' element={<Navigate to='/home' replace />} />
    </Routes>
  );
};
