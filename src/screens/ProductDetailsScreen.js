import {
    View,
    StyleSheet,
    Image,
    FlatList,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailScreen = () => {
    const { width } = useWindowDimensions();
    const product = useSelector(state => state.products.selectedProduct);
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({ product }))
    }

    return (
        <View>
            <ScrollView>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ ...styles.image, width }}
                        />
                    )}
                    horizontal
                    pagingEnabled
                />
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>₹{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }

})

export default ProductDetailScreen;