import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Twitter(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgUsuario} source={require(`../assets/man.png`)} />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.texto}</Text>
      <Image style={styles.imgTexto} source={require(`../assets/paisagem-min.jpg`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    marginLeft: 40,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  texto: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 10,
    textAlign: 'left',
  },
  imgUsuario: {
    height: 32,
    width: 32,
    marginBottom:-25
  },
  imgTexto: {
    height: 128,
    width: 270,
  }
});
