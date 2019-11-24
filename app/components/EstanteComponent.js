import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Estante from "../img/estante.svg";

export default class EstanteComponent extends PureComponent {
  render() {
    return (
      <View>
        <Estante width={360} height={80}/>
      </View>
    );
  }
}