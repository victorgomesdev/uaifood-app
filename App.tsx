import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { AuthContext } from './src/services/auth';

export default function App() {
  return (

    <AuthContext.Provider value={null}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


