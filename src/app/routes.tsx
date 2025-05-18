import { Route, Routes } from 'react-router-dom';
import {
  StartPage,
  ProfilePage,
  SignupInfoPage,
  ChooseRolePage,
} from '@/pages/user';
import {
  FanDashboardPage,
  TicketHistoryPage,
  SearchPerformancePage,
  PerformanceDetailPage,
} from '@/pages/fan';
import { BandDashboardPage, SearchPlacePage } from '@/pages/band';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/role" element={<ChooseRolePage />} />
      <Route path="/nickname" element={<SignupInfoPage />} />
      <Route path="/bandname" element={<SignupInfoPage />} />
      <Route path="/fan/dashboard" element={<FanDashboardPage />} />
      <Route path="/fan/performances" element={<SearchPerformancePage />} />
      <Route path="/fan/performances/1" element={<PerformanceDetailPage />} />
      <Route path="/fan/tickets" element={<TicketHistoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/band/dashboard" element={<BandDashboardPage />} />
      <Route path="/band/place" element={<SearchPlacePage />} />
    </Routes>
  );
}
