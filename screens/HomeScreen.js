import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import { Container, Button, Content, Card, CardItem, Body, Text, RefreshControl } from 'native-base';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeScreen extends Component  {

  constructor(props){
    super(props);
    this.state = {
      leitos: [],
      refreshing: false,
    }
  }

  componentWillMount() {
    this.consultaLeitos();
  }

  consultaLeitos() {
    this.setState({ refreshing: true });
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/leitos',
      })
      .then( res => {
        this.setState({ leitos: res.data });
      })
      .catch(err => console.log('erro', err))
      .finally(() => this.setState({ refreshing: false }));
  }

  renderItem(item) {
    console.log('item', item);
    return (
      <Card>
        <CardItem header>
          <Text>Leito nº {item.codigo}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <View style={styles.cardRow}>
              <Text style={styles.textHigh}>Predio</Text>
              <Text>{item.predio}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.textHigh}>Ala</Text>
              <Text>{item.ala}</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.textHigh}>Andar</Text>
              <Text>{item.andar}</Text>
            </View>
          </Body>
        </CardItem>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '80%', height: 1, backgroundColor: '#C1DBE3' }} />
        </View>
        <CardItem footer>
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button info>
                <Text>Iniciar limpeza</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <>
        <Container style={styles.container}>
          <Content>
            <FlatList
              data={this.state.leitos}
              renderItem={ ({item}) => this.renderItem(item) }
            />
          </Content>
        </Container>
      </>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Limpeza de leitos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 24
  },
  cardRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  textHigh: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
