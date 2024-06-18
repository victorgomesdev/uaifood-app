import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as env from '../../../env.json'

export default function Device({ navigation, route }: any) {

  useEffect(()=>{

    navigation.setOptions({
      headerTitle: route.params.name
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <Text style={styles.title}>Ações</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}>
          <Text style={styles.buttonText}>Liberar ração</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FDF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    display: 'flex',
    backgroundColor: env.SMALL_PRIORITY,
    borderRadius: 16,
    width: '75%',
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    gap: 25
  },
  title: {
    fontSize: 20
  },
  button: {
    width: "60%",
    height: 70,
    backgroundColor: env.HIGHT_PRIORITY,
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  }
});