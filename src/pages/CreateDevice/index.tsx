import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const CreateDevice = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [robotId, setRobotId] = useState('');

    // Criar ref para o ScrollView
    const scrollViewRef = useRef(null);

    // Criar refs para os campos de entrada
    const nameInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    const robotIdInputRef = useRef(null);

    // Função para rolar para o campo de entrada quando ele é focado


    const handleCancel = () => {
        setName('');
        setDescription('');
        setRobotId('');
    };

    const handleDone = () => {
        console.log('Nome:', name);
        console.log('Descrição:', description);
        console.log('ID do Robô:', robotId);
    };

    return (
        <View style={styles.mainContainer}>
           
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Adiciona a imagem local */}
                <Image
                    source={require('../../../assets/favicon.png')} // Substitua pelo caminho para a sua imagem local
                    style={styles.image}
                />

                <View style={styles.contentContainer}>
                    <TextInput
                        ref={nameInputRef}
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Insira o nome"

                    />
                    <TextInput
                        ref={descriptionInputRef}
                        style={styles.descriptionInput}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Insira a descrição"
                        multiline={true}
                        textAlignVertical="top"
                    />
                    <View style={styles.idContainer}>
                        <TextInput
                            ref={robotIdInputRef}
                            style={styles.idInput}
                            value={robotId}
                            onChangeText={setRobotId}
                            placeholder="Insira o ID"
                        />
                        <Text style={styles.label}>Insira o código de identificação do seu robô</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonDone} onPress={handleDone}>
                            <Text style={styles.buttonText}>Pronto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                {/* Conteúdo da barra inferior */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F1FDF2', // Cor de fundo da página (Altere conforme necessário)
    },
    header: {
        height: 80, // Altura da barra superior para acomodar notificações
        backgroundColor: '#A5FFAD', // Cor de fundo da barra superior (Altere conforme necessário)
        justifyContent: 'center',
        paddingLeft: 20,
    },
    headerText: {
        fontSize: 24, // Aumenta o tamanho da fonte para a palavra "Credenciais"
        fontWeight: 'bold',
        color: 'black', // Cor do texto da barra superior (Altere conforme necessário)
    },
    scrollContainer: {
        flexGrow: 1,
    },
    image: {
        width: '100%', // A imagem ocupará toda a largura da tela
        height: 250, // Defina a altura da imagem conforme necessário
        resizeMode: 'cover', // Ajusta a imagem para cobrir o espaço disponível
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20, // Adiciona padding na parte inferior para evitar sobreposição da barra inferior
        paddingTop: Platform.OS === 'ios' ? 0 : 20, // Adiciona padding na parte superior para evitar sobreposição da barra superior no Android
    },
    input: {
        borderWidth: 1,
        borderColor: '#00FF21', // Cor da borda do input (Altere conforme necessário)
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '90%',
    },
    descriptionInput: {
        borderWidth: 1,
        borderColor: '#00FF21', // Cor da borda do input de descrição (Altere conforme necessário)
        borderRadius: 5,
        padding: 50,
        marginBottom: 20,
        width: '90%',
        textAlignVertical: 'top',
    },
    idContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
    },
    idInput: {
        borderWidth: 1,
        borderColor: '#00FF21', // Cor da borda do input de ID (Altere conforme necessário)
        borderRadius: 5,
        padding: 10,
        width: '50%',
    },
    label: {
        marginLeft: 20,
        textAlign: 'left',
        width: '50%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    buttonCancel: {
        backgroundColor: '#00A215', // Cor de fundo do botão "Cancelar" (Altere conforme necessário)
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonDone: {
        backgroundColor: '#00A215', // Cor de fundo do botão "Pronto" (Altere conforme necessário)
        padding: 14,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white', // Cor do texto dos botões (Altere conforme necessário)
        fontWeight: 'bold',
        textAlign: 'center'
    },
    footer: {
        height: 50,
        backgroundColor: '#A5FFAD', // Cor de fundo da barra inferior (Altere conforme necessário)
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateDevice;