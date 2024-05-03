import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBorder}>
        <Text style={styles.title}>Criar conta</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#00A215" // Cor do texto do placeholder
         // Cor do texto dentro do input
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#00A215" // Cor do texto do placeholder
         // Cor do texto dentro do input
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#00A215" // Cor do texto do placeholder
         // Cor do texto dentro do input
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        placeholderTextColor="#00A215" // Cor do texto do placeholder
         // Cor do texto dentro do input
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>Já possuo uma conta</Text>
      </TouchableOpacity>
      <View style={styles.bottomBorder} />
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
  topBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#00A215',
    justifyContent: 'center', // Para alinhar o texto verticalmente
    paddingLeft: 20, // Adicionando espaço à esquerda para o texto
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#00A215',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20, // Ajuste a margem superior conforme necessário
    borderColor: '#00A215', // Cor da borda do input
    borderWidth: 2, // Largura da borda do input
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00A215',
    padding: 15,
    borderRadius: 10,
    width: '45%', // Define a largura do botão para ocupar 45% da largura do container
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#00A215',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});