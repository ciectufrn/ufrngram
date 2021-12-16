import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pictures({}) {
  const [gridpictures, setGridPictures] = useState([]);

  useEffect(function(){
    async function getData() {

      const token = await AsyncStorage.getItem('token');
      
      const headerOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      const response = await fetch('https://mobile.ect.ufrn.br:3000/gridpictures', headerOptions);
      const gridpictures = await response.json();
      setGridPictures(gridpictures);
    }
    getData();
  }, []);

  function renderItem({ item }) {
    console.log(item);
    return <View style={styles.gridline}>
      { 
        item.map((pic) => <View style={styles.gridimageview} aspectRatio={1}>
            <Image style={styles.gridimage} source={{ uri: pic.uri }} />
          </View>
        )
      }
    </View>
  }

  return (
    <View style={styles.gridpictures}>
      <FlatList
        data={gridpictures}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gridpictures: {
    flex: 1,
  },
  gridline: {
    flexDirection: 'row',
    width: '100%',
  },
  gridimageview: {
    width: '33%',
    height: undefined,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 0.5,
  },
  gridimage: {
    width: '100%',
    height: '100%',
  },
});
