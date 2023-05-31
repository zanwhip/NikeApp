import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';


const ShoppingCart = () => {
  const ShoppingCartTotals = () => (
    <View style={styles.totalContainer}> 
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>10000,00$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>30,00$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>10030,00$</Text>
        </View>
      </View>
  )
  return (
    <>
    <FlatList 
    data={cart}
    renderItem={({item}) => <CartListItem  cartItem={item}/>}
    ListFooterComponent={ShoppingCartTotals}
    />
  
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Check Out</Text>
    </TouchableOpacity>
    </>
  );
};

export default ShoppingCart

const styles = StyleSheet.create({
  totalContainer : {
    margin: 20,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2, 
  },
  text: {
    fontSize : 16,
    color : 'gray',
  },
  textBold: {
    fontSize : 16,
    color : 'gray',
    fontWeight: '500'
  },
  button : {
    position: 'absolute',
     backgroundColor: '#006666',
     bottom: 30,
     width: '90%',
     alignSelf: 'center',
     padding: 15,
     borderRadius: 100,
     alignItems: 'center',

 },
 buttonText : {
     color: 'white',
     fontWeight: '500',
     fontSize: 16,
 },
})