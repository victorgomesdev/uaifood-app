import { useEffect, useState } from 'react'
import { FlatList, ScrollView, View } from "react-native";
import style from "./style";
import Card from "../../components/Card";
import { DeviceProps } from '../../types';

export default function Home({ navigation, page }: any) {

    const [devices, setDevices] = useState<DeviceProps[]>([])

    useEffect(() => {
        setDevices([
            { id: 1, name: 'jhjgfgdgk', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 1, name: 'jhdfjh', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 2, name: 'hgdjgj', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 3, name: 'hfhf', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 3, name: 'kjfljf', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 3, name: 'jfhkddjhfkh', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
        ])
    }, [])

    return (

        <FlatList
            style={style.screen}
            data={devices}
            renderItem={({ item }) => (

                <Card
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    imageURI={item.imageURI}
                    clickHandler={navigation}
                />)
            }
            keyExtractor={(item) => item.name}
            ListFooterComponent={(
                <View style={{height: 25}}></View> // procurar como colocar o espaço no fim da lista
            )}
        />


    )
}