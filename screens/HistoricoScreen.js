import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import { Container, Button, Content, Card, CardItem, Body, Text, RefreshControl } from 'native-base';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

export default class HistoricoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leitos: [
          {leito: 101, status: 1},
          {leito: 102, status: 3},
          {leito: 103, status: 1},
          {leito: 104, status: 1},
          {leito: 105, status: 2},
          {leito: 201, status: 3},
          {leito: 202, status: 3},
          {leito: 203, status: 2},
          {leito: 204, status: 1},
          {leito: 205, status: 1},
          {leito: 301, status: 2},
          {leito: 302, status: 3},
          {leito: 303, status: 3},
          {leito: 304, status: 3},
          {leito: 304, status: 3},
          {leito: 401, status: 2},
          {leito: 402, status: 1},
          {leito: 403, status: 2},
          {leito: 404, status: 1},
          {leito: 405, status: 3},
          {leito: 501, status: 3},
          {leito: 502, status: 1},
          {leito: 503, status: 1},
          {leito: 504, status: 3},
          {leito: 505, status: 2},
          {leito: 601, status: 2},
          {leito: 602, status: 3},
          {leito: 603, status: 1},
          {leito: 604, status: 2},
          {leito: 605, status: 2},
      ]
    };
  }

  renderItem(item, index) {
    let descricao = '';
    switch(item.status) {
      case 1:
        descricao = '#EFC3DE';
        break;
      case 2:
        descricao = '#FFFCD2';
        break;
      case 3:
        descricao = '#C2ECEA';
        break;
    };

    return (
      <View style={{ alignItems: "center", flexGrow: 1, padding: 20, padding: 8, borderRadius: 8, backgroundColor: descricao, margin: 2,}}>
        <Text>{item.leito}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Container style={styles.container}>
          <Content>
            <FlatList
              data={this.state.leitos}
              renderItem={ ({item, index}) => this.renderItem(item, index) }
              numColumns={5}
            />
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 4}}>
                <View style={{height: 16, width: 16, backgroundColor: '#EFC3DE', borderRadius: 8}}/>
                <Text>Aguardando Limpeza</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 4}}>
                <View style={{height: 16, width: 16, backgroundColor: '#FFFCD2', borderRadius: 8}}/>
                <Text>Em Limpeza</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 4}}>
                <View style={{height: 16, width: 16, backgroundColor: '#C2ECEA', borderRadius: 8}}/>
                <Text>Limpo</Text>
              </View>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

HistoricoScreen.navigationOptions = {
  title: 'Hospital',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
});
