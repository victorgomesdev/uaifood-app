import { View, Text, Button } from "react-native";
import Profile from "../../components/Profile";
import style from "./style";
import * as env from '../../../env.json'
import CommonButton from "../../components/Button";

export default function ProfileScreen({ navigation, route }: any) {
    return (
        <View style={style.screen}>
            <View style={style.container}>
                <Text
                style={{
                    backgroundColor: env.SMALL_PRIORITY,
                    fontSize: 30,
                    color: env.HIGHT_PRIORITY,
                    padding: 20,
                    borderRadius: 50
                }}>VG</Text>
                <Text style={{marginTop: 20, fontSize: 20, color: env.SMALL_PRIORITY}}>Victor Gomes Nogueira</Text>
                <Text style={{fontSize: 20, color: env.SMALL_PRIORITY}}>victorgomesnog123@gmail.com</Text>
                <View style={style.terms}>
                    <Text>Termos de Uso</Text>
                    <Text>Política de Privacidade</Text>
                </View>
                <CommonButton
                title="Sair"
                disabled={false} 
                width={180}
                onClickHandler={()=> navigation.navigate('Home')}/>
            </View>
        </View>
    )
}