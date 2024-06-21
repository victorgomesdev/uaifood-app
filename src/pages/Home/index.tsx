import { useEffect, useState, useContext } from 'react'
import { FlatList, ScrollView, View } from "react-native";
import style from "./style";
import Card from "../../components/Card";
import { DeviceProps } from '../../types';
import Profile from '../../components/Profile';
import Fab from '../../components/Fab';
import {listDevices} from '../../services/devices'
import {AuthContext} from '../../services/auth'
export default function Home({ navigation, page }: any) {

    const [devices, setDevices] = useState<DeviceProps[]>([])
    const {user} = useContext(AuthContext)
    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (<Profile name='VG' navigation={navigation} />)
        })

        // setDevices([
        //     { id: 1, name: 'Alimentador do aquário', description: 'Deve ser reabastecido a cada três dias.', imageURI: 'jdhfdufbhuf' },
        //     { id: 1, name: 'Alimentador da granja', description: 'Fica próximo a parede', imageURI: 'jdhfdufbhuf' },
        //     { id: 2, name: 'Bebedouro do canil', description: 'Lembre de lavá-lo  diariamente', imageURI: 'jdhfdufbhuf' },
        // ])

        setDevices(listdevices(user._id, user.token))
    }, [])

    return (
        <>
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
                    <View style={{ height: 25 }}></View> // procurar como colocar o espaço no fim da lista
                )}
            />
            <Fab nav={navigation}/>
        </>

    )
}
