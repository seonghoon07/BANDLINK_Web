import '@/shared/styles/global.css';
import Router from '@/app/routes';
import { useAuthService } from '@/shared/utils/auth/useAuthService';

export default function App() {
  useAuthService();
  return <Router />;
}
