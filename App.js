import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from './src/data/products';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
export default function App() {
  return (
    <Provider store={store}>
          <Navigation /> 
      <StatusBar style="auto" />
        </Provider>
  );
}
