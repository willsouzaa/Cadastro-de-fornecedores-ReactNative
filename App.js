import React, { useState } from 'react'; // Importamos o React e o hook useState para gerenciar estados.
import { View, StyleSheet } from 'react-native'; // Importamos componentes básicos para estruturar a tela.
import CadastroFornecedor from './CadastroFornecedor'; // Importamos o componente de cadastro.
import ListaFornecedores from './ListaFornecedores'; // Importamos o componente da lista de fornecedores.

const App = () => {
  // Criamos um estado para armazenar os fornecedores cadastrados.
  const [fornecedores, setFornecedores] = useState([]);

  // Função para adicionar um novo fornecedor ao estado.
  const adicionarFornecedor = (fornecedor) => {
    // Atualizamos o estado adicionando o novo fornecedor ao final da lista.
    setFornecedores((prev) => [...prev, fornecedor]);
  };

  // Função para excluir um fornecedor com base no índice da lista.
  const excluirFornecedor = (index) => {
    // Filtramos os fornecedores e removemos o que corresponde ao índice.
    setFornecedores((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {/* Componente responsável por cadastrar fornecedores */}
      <CadastroFornecedor onSubmit={adicionarFornecedor} />
      {/* Componente que exibe a lista de fornecedores */}
      <ListaFornecedores fornecedores={fornecedores} onDelete={excluirFornecedor} />
    </View>
  );
};

// Estilo do container principal do aplicativo.
const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupa toda a altura da tela.
    padding: 20, // Espaçamento interno para o conteúdo.
    backgroundColor: '#f5f5f5', // Cor de fundo.
  },
});

export default App; // Exportamos o componente principal.
