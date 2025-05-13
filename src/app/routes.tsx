import { Route, Routes } from 'react-router-dom';
import StartPage from '@/pages/StartPage';
import ChooseRole from '@/pages/ChooseRole';
import SignupInfo from '@/pages/SignupInfo';
import FanDashboard from '@/pages/FanDashboard';
import SearchPerformance from '@/pages/SearchPerformance';
import PerformanceDetail from '@/pages/PerformanceDetail';
import TicketHistory from '@/pages/TicketHistory';
import ProfilePage from '@/pages/ProfilePage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/role" element={<ChooseRole />} />
      <Route path="/nickname" element={<SignupInfo />} />
      <Route path="/bandname" element={<SignupInfo />} />
      <Route path="/fan/dashboard" element={<FanDashboard />} />
      <Route path="/fan/performances" element={<SearchPerformance />} />
      <Route path="/fan/performances/1" element={<PerformanceDetail />} />
      <Route path="/fan/tickets" element={<TicketHistory />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
