import { FlatList, View, Image, StyleSheet, Pressable } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { productSlice } from "../store/productSlice";

const ProductScreen = ({ navigation }) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        // update 
                        dispatch(productSlice.actions.setSelectedProduct(item.id));
                        navigation.navigate('Product Details')
                    }}
                    style={styles.itemContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </Pressable>
            )}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: "50%",
        padding: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    }
})

export default ProductScreen;