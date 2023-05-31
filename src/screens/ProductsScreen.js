import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';

const ProductsScreen = ({navigation}) => {
  //const navigation = useNavigation();
  return (
    <FlatList 
    data={products}
    renderItem={({item}) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('Products Detail') }
       style={styles.itemContainer}>
      <Image source={{uri: item.image}}
      style={styles.image} />
    </TouchableOpacity>
    )}
    numColumns={2}
    />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    image :{
        width: '100%',
        aspectRatio: 1,
      },
      itemContainer :{
        width: '50%',
        padding: 1,
      }
})