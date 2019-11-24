import React, { PureComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import EstanteComponent from "../components/EstanteComponent.js"
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const estante = <EstanteComponent />;
    const vazio = <Text style={styles.textVazio}>Estoque vazio</Text>;
    return (
      <ScrollView>
        {this.props.isEstoqueItem ? vazio : estante}
      </ScrollView>
    );
  }
}
const styles = {
  textVazio: {
    textAlign: "center",
    paddingTop: 50,
    fontSize: 20,
    fontFamily: "Helvetica"
  }
}