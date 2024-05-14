import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import * as env from '../../../env.json'

export default function LoginScreen({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    // console.log("Email:", email);
    // console.log("Password:", password);

    navigation.navigate('Home')
  };

  const handleCreateAccount = () => {
    // Lógica para criar uma nova conta aqui
    console.log("Criar conta");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image
          source={require('../../../assets/Uaifood.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.createAccountButtonText}>Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle={"default"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: env.BACKGROUND, // Fundo verde
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: '#FFFFFF', // Cor de fundo branca para a área de login
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  input: {
    height: 50, // Ajuste a altura do input
    width: '100%',
    borderColor: '#00A215', // Cor da borda verde
    borderWidth: 2,
    marginBottom: 60, // Ajuste o espaçamento vertical entre os inputs
    paddingHorizontal: 10,
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#00A215', // Cor do botão de Entrar
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#00A215', // Cor do botão de Criar Conta
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});