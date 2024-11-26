import React, { useState } from 'react'; // Importamos React e o hook useState para gerenciar estados.
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native'; // Componentes básicos para o formulário.
import * as ImagePicker from 'expo-image-picker'; // Biblioteca para selecionar imagens.

const CadastroFornecedor = ({ onSubmit }) => {
  // Estados para armazenar os valores do formulário.
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState(null);

  // Função para abrir a galeria de imagens.
  const selecionarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens.
      allowsEditing: true, // Permite editar a imagem antes de selecionar.
      aspect: [4, 3], // Restringe a proporção da imagem.
      quality: 1, // Qualidade máxima.
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri); // Salvamos o URI da imagem no estado.
    }
  };

  // Função chamada quando o formulário é enviado.
  const handleSubmit = () => {
    onSubmit({ nome, endereco, contato, categoria, imagem }); // Passamos os dados para o App.js.
    // Limpamos os campos do formulário.
    setNome('');
    setEndereco('');
    setContato('');
    setCategoria('');
    setImagem(null);
  };

  return (
    <View style={styles.form}>
      {/* Campos do formulário */}
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do fornecedor"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={contato}
        onChangeText={setContato}
      />
      <Text style={styles.label}>Categoria:</Text>
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      {/* Botão para selecionar uma imagem */}
      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      {/* Exibe a imagem selecionada, se houver */}
      {imagem && <Image source={{ uri: imagem }} style={styles.image} />}
      {/* Botão para enviar o formulário */}
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

// Estilo do formulário.
const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default CadastroFornecedor; // Exportamos o componente de cadastro.
