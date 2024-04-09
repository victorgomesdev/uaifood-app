import { Text, TouchableOpacity, Image, View } from "react-native";
import style from "./style";
import { CardProps } from "../../types";

export default function Card(props: CardProps){
    return(
        <TouchableOpacity
        activeOpacity={0.6}
        style={style.card}>
            <View style={style.imageContainer}>
                <Image
                source={require('../../../assets/favicon.png')}/>
            </View>
            <View style={style.cardContainer}>
                <Text style={style.title}>Robô</Text>
                <Text style={style.description}>kdhdgtbfhgvafafsststststttttttsstttttttttttttttttttttttttttttt</Text>
            </View>
        </TouchableOpacity>
    )
}