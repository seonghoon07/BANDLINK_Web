import { Route, Routes } from 'react-router-dom';
import StartPage from '@/pages/StartPage';
import ChooseRole from '@/pages/ChooseRole';
import SignupInfo from '@/pages/SignupInfo';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/role" element={<ChooseRole />} />
      <Route path="/nickname" element={<SignupInfo />} />
      <Route path="/bandname" element={<SignupInfo />} />
    </Routes>
  );
}
