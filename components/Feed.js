import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {

  const [feed, setFeed] = useState([]);

  useEffect(function(){
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
      const feed = await response.json();
      setFeed(feed);
    }
    getData();
  }, []);

  function renderItem({ item }) {
    return <View style={styles.post}>
      <View style={styles.postheader}>
        <View style={styles.postheaderesquerda}>
          <Image style={styles.postheaderimg} source={{ uri: item.imgPerfilUri }} />
          <Text>{item.nomeUsuario}</Text>
        </View>
        <FontAwesome5 name="ellipsis-h" size={16} color="black" />
      </View>
      <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={{ uri: item.imgPostUri }} />
      <View style={styles.footer}>
        <FontAwesome5 style={styles.footericon} name="heart" size={36} color="black" />
        <FontAwesome5 style={styles.footericon} name="comment" size={36} color="black" />
      </View>
    </View>
  }

  return (
    <View style={styles.feed}>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    backgroundColor: '#fff',
  },
  postheader: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  postheaderesquerda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  postimg: {
    width: '100%',
    height: undefined,
  },
  footer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footericon: {
    margin: 5,
  }
});
