import { useEffect, useState } from 'react'
import { FlatList, ScrollView, View } from "react-native";
import style from "./style";
import Card from "../../components/Card";
import { DeviceProps } from '../../types';
import Profile from '../../components/Profile';

export default function Home({ navigation, page }: any) {

    const [devices, setDevices] = useState<DeviceProps[]>([])

    useEffect(() => {

        navigation.setOptions({
            headerRight: ()=> (<Profile name='VG' navigation={navigation}/>)
        })

        setDevices([
            { id: 1, name: 'Alimentador do aquário', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 1, name: 'Alimentador da granja', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 2, name: 'Alimentador do canil', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 3, name: 'Alimentador das vacas ', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' },
            { id: 3, name: 'Alimentador do papagaio', description: 'hfkhfkhf', imageURI: 'jdhfdufbhuf' }
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