/**
 * ARQUIVO PARA AS ROTAS DO APP. AQUI FICAM DEFINIDAS TODAS AS PÁGINAS E A LÓGICA DE NAVEGAÇÃO ENTRE ELAS
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './pages/Login'
import Home from './pages/Home'
import * as env from '../env.json'
import Profile from './components/Profile'
import ProfileScreen from './pages/Profile'
import Device from './pages/Devices'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: env.HIGHT_PRIORITY },
                headerTitleStyle: {
                    fontSize: 25,
                    color: '#ffffff'
                },
                statusBarColor: env.HIGHT_PRIORITY,
                headerRight: () => (<Profile name='' />)

            }}>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: 'Uaifood'
                }} />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerRight: () => null
                }} />
            <Stack.Screen
            name='DeviceControl'
            component={Device}
            options={{
                headerTitle: "Device"
            }}
            />
        </Stack.Navigator>
    )
}