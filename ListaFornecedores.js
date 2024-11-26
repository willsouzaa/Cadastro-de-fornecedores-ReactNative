import React from 'react'; // Importamos o React.
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native'; // Componentes básicos para exibir e estilizar os itens.

const ListaFornecedores = ({ fornecedores, onDelete }) => {
  return (
    // FlatList é usado para renderizar listas de maneira eficiente.
    <FlatList
      data={fornecedores} // Passamos a lista de fornecedores como dados.
      keyExtractor={(item, index) => index.toString()} // Cada item precisa de uma chave única; usamos o índice.
      renderItem={({ item, index }) => (
        <View style={styles.item}>
          {/* Se o fornecedor tiver uma imagem, mostramos ela */}
          {item.imagem && <Image source={{ uri: item.imagem }} style={styles.image} />}
          {/* Exibimos as informações do fornecedor */}
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.text}>Endereço: {item.endereco}</Text>
            <Text style={styles.text}>Contato: {item.contato}</Text>
            <Text style={styles.text}>Categoria: {item.categoria}</Text>
          </View>
          {/* Botão para excluir o fornecedor */}
          <Button title="Excluir" color="#ff0000" onPress={() => onDelete(index)} />
        </View>
      )}
    />
  );
};

// Estilos para os cards de fornecedores.
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0e0e0', // Fundo do card.
    padding: 10, // Espaçamento interno.
    marginVertical: 5, // Espaçamento entre os cards.
    borderRadius: 5, // Bordas arredondadas.
    flexDirection: 'row', // Organiza o conteúdo em linha.
    alignItems: 'center', // Alinha os itens no centro verticalmente.
  },
  image: {
    width: 50, // Largura da imagem.
    height: 50, // Altura da imagem.
    borderRadius: 25, // Faz a imagem ficar redonda.
    marginRight: 10, // Espaçamento entre a imagem e o texto.
  },
  info: {
    flex: 1, // Ocupa o máximo de espaço disponível.
  },
  nome: {
    fontSize: 18, // Tamanho da fonte do nome.
    fontWeight: 'bold', // Deixa o texto em negrito.
  },
  text: {
    fontSize: 14, // Tamanho da fonte para as informações secundárias.
  },
});

export default ListaFornecedores; // Exportamos o componente da lista.
