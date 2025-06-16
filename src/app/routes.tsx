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
import {
  BandDashboardPage,
  SearchPlacePage,
  PlaceFilterPage,
  PlaceDetailPage,
  RoomReservationPage,
  MyPerformancePage,
  PerformanceCreatePage,
} from '@/pages/band';

import { MySpacePage, SpaceOwnerDashboardPage } from '@/pages/spaceOwner';

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
      <Route path="/band/place/filter" element={<PlaceFilterPage />} />
      <Route path="/band/place/:placeId" element={<PlaceDetailPage />} />
      <Route
        path="/band/place/:placeId/room/:roomId/reserve"
        element={<RoomReservationPage />}
      />
      <Route path="/band/performance" element={<MyPerformancePage />} />
      <Route
        path="/band/performance/create"
        element={<PerformanceCreatePage />}
      />
      <Route
        path="/spaceOwner/dashboard"
        element={<SpaceOwnerDashboardPage />}
      />
      <Route path="spaceOwner/space" element={<MySpacePage />} />
    </Routes>
  );
}
