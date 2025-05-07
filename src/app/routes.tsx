import { Route, Routes } from 'react-router-dom';
import StartPage from '@/pages/StartPage';
import ChooseRole from '@/pages/ChooseRole';
import InputNickname from '@/pages/InputNickname';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/role" element={<ChooseRole />} />
      <Route path="/nickname" element={<InputNickname />} />
    </Routes>
  );
}
