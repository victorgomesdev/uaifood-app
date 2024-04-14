import { View, ScrollView } from "react-native";
import style from "./style";
import Card from "../../components/Card";

export default function Home({navigation, page}: any){
    return(
        <ScrollView
        style={style.screen}
        >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
    )
}