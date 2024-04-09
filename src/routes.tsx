/**
 * ARQUIVO PARA AS ROTAS DO APP. AQUI FICAM DEFINIDAS TODAS AS PÁGINAS E A LÓGICA DE NAVEGAÇÃO ENTRE ELAS
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './pages/Login'
import Home from './pages/Home'
import * as env from '../env.json'
import Profile from './components/Profile'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerStyle:{backgroundColor: env.HIGHT_PRIORITY},
            headerTitleStyle: {
                fontSize: 25
            },
            statusBarColor: env.HIGHT_PRIORITY
        }}>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: 'Uaifood'
                }} />
        </Stack.Navigator>
    )
}