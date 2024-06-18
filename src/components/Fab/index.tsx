import { TouchableOpacity, Text } from "react-native";
import style from "./style";

export default function Fab({ nav }: any) {
    return (
        <TouchableOpacity
            style={style.fab}
            activeOpacity={0.85}
            onPress={()=> nav.navigate('CreateDevice')}
        >
            <Text>Cadastrar</Text>
        </TouchableOpacity>
    )
}