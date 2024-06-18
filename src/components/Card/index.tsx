import { Text, TouchableOpacity, Image, View } from "react-native";
import style from "./style";
import { DeviceProps } from "../../types";

export default function Card(props: DeviceProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={style.card}
            onPress={()=> props.clickHandler.navigate('DeviceControl', {name: props.name})}>
            <View style={style.imageContainer}>
                <Image
                    source={require('../../../assets/Uaifood.png')}
                    resizeMode="contain"
                    style={style.image}/>
            </View>
            <View style={style.cardContainer}>
                <View style={style.nameContainer}>
                    <Text style={style.title}>{props.name}</Text>
                </View>
                <View style={style.descContainer}>
                    <Text style={style.description}>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}