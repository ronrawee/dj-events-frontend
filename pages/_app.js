import { AuthProvider } from '@/context/AuthContext';
import '../styles/globals.css';
import { FaRoad } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
