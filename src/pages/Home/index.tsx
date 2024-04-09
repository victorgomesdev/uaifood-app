import { View, Text } from "react-native";
import style from "./style";
import Card from "../../components/Card";

export default function Home({navigation}: any){
    return(
        <View style={style.screen}>
            <Card/>
            <Card/>
            <Card/>
        </View>
    )
}