import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Perfil',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
