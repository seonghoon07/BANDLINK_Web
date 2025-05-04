import { Route, Routes } from 'react-router-dom';
import StartPage from '@/pages/StartPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
}
