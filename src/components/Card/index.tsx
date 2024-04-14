import { Text, TouchableOpacity, Image, View } from "react-native";
import style from "./style";
import { DeviceProps } from "../../types";

export default function Card(props: DeviceProps, navigation: any) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={style.card}
            onPress={()=>{}}>
            <View style={style.imageContainer}>
                <Image
                    source={require('../../../assets/Uaifood.png')}
                    resizeMode="center"/>
            </View>
            <View style={style.cardContainer}>
                <View style={style.nameContainer}>
                    <Text style={style.title}>Robô</Text>
                </View>
                <View style={style.descContainer}>
                    <Text style={style.description}>kdhdgtbfhgvafafsststststttttttsstttttttttttttttttttttttttttttt</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}