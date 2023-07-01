import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
//import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';
import { 
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
  cartSlice,
} from '../store/cartSlice';
const initialState = {
  items : [],
  deliveryFee: 15,
  freeDeliveryFrom : 200,
}

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)
  return(
  <View style={styles.totalContainer}> 
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>15 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  )
} 
const ShoppingCart = () => {
  // 2:55:00
  const cartItems  = useSelector((state) => state.cart.items)
  return (
    <>
    <FlatList 
    data={cartItems}
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