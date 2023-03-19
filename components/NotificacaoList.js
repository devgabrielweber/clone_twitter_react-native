import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';

import { Card, FAB, Title, Paragraph } from 'react-native-paper';

export default function NotificacaoList({ navigation }) {
  const [data, setData] = React.useState([]);
  const [carregando, setCarregando] = React.useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await resp.json();
    setData(data);
    setCarregando(false);
  };
  const renderItem = ({ item }) => {
    var imagem = '' + item.image + '';
    return (
      <Card>
        <Card.Title title={item.title} subtitle={item.description} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: imagem }} />
      </Card>
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {carregando && <Text>Carregando...</Text>}
          {data && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  fab: {
    position: 'fixed',
    margin: 16,
    right: 0,
    bottom: 40,
  },
  div: {
    padding: 8,
  },
});
