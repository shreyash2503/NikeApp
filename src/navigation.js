import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
    const numberofItems = useSelector(selectNumberOfItems)
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
                <Screen
                    name="Product"
                    component={ProductScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Cart')}
                                style={{ flexDirection: 'row' }}
                            >
                                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberofItems}</Text>
                            </Pressable>)
                    })}

                />
                <Screen
                    name="Product Details"
                    component={ProductDetailScreen}
                    options={{ presentation: 'modal' }}
                />
                <Screen name="Cart" component={ShoppingCart} />
            </Navigator>
        </NavigationContainer>

    )
}

export default Navigation;
