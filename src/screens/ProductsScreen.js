import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import products from '../data/products';
import {useSelector, useDispatch} from 'react-redux'
import { productsSlice } from '../store/ProductsSlice';

const ProductsScreen = ({navigation}) => {
  //const navigation = useNavigation();
  
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.products.products );
  
  return (
    <FlatList 
    data={products}
    renderItem={({item}) => (
    <TouchableOpacity
        onPress={() => {
          // update selected product 
          //dispatch(productsSlice.actions.setSelectedProduct(item.id));  
          dispatch(productsSlice.actions.setSelectedProduct(item.id));
          navigation.navigate('Products Detail') 
        }}
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