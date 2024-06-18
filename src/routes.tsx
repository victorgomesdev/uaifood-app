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
import LoginScreen from './pages/Login/login'
import Account from './pages/Account'
import CreateDevice from './pages/CreateDevice'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerStyle: { backgroundColor: env.HIGHT_PRIORITY },
                headerTitleStyle: {
                    fontSize: 25,
                    color: '#ffffff'
                },
                statusBarColor: env.HIGHT_PRIORITY,
                //headerRight: () => (<Profile name='' />)
                
            }}>
                <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
                >
                </Stack.Screen>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerTitle: 'Uaifood',
                }} />
            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                />
            <Stack.Screen
            name='DeviceControl'
            component={Device}
            options={{
                headerTitle: "Device"
            }}
            />

            <Stack.Screen
            name='CreateAccount'
            component={Account}
            options={{
                headerShown: false
            }}/>

            <Stack.Screen
            name='CreateDevice'
            component={CreateDevice}/>
        </Stack.Navigator>
    )
}