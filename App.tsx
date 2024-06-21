import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { AuthProvider } from './src/services/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}


