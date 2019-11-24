import React, { PureComponent } from 'react';
import { View } from 'react-native';
import EstanteComponent from "../components/EstanteComponent.js"
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <EstanteComponent style={styles.estante}/>
      </View>
    );
  }
}
const styles = {
  estante: {
    paddingTop: 50,
    paddingBottom: 20,
  },
}