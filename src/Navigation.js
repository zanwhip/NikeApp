import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity, Text} from 'react-native'

const Stack = createNativeStackNavigator();

const Navigation =() =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: 'white'} }} >
                <Stack.Screen 
                name="Products" 
                component={ProductsScreen} 
                options={({navigation})=>({ 
                    headerRight: () => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Cart')}
                        style={{ flexDirection : 'row' }}>
                       <Entypo name="shopping-cart" size={18} color={'gray'}/>
                       <Text style={{ marginLeft: 5, fontWeight: '500', fontSize: 10}}>1</Text>
                    </TouchableOpacity>
                    ),
                 })} 
                />
                <Stack.Screen name="Products Detail" component={ProductDetailScreen} options={{presentation:'modal'}} />
                <Stack.Screen name="Cart" component={ShoppingCart} options={{presentation:'modal'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Navigation;