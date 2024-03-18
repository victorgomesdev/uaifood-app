/**
 * ARQUIVO PARA AS ROTAS DO APP. AQUI FICAM DEFINIDAS TODAS AS PÁGINAS E A LÓGICA DE NAVEGAÇÃO ENTRE ELAS
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './pages/LoginPage'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginPage}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}