import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={product.image} style={styles.productImage}>
            <Text style={product?.discount? styles.saleTag: styles.tag}>{product?.tag? product.tag: '-20%'}</Text>
            <TouchableOpacity style={styles.cartBtn}>
                <Fontisto style={styles.cartIcon} name="shopping-basket-add" />
            </TouchableOpacity>
        </ImageBackground>
        <View style={styles.wrapper}>
            <View style={styles.ratingContainer}>
                <Fontisto style={styles.rating} name="star" />
                <Fontisto style={styles.rating} name="star" />
                <Fontisto style={styles.rating} name="star" />
                <Fontisto style={styles.rating} name="star" />
                <Fontisto style={styles.rating} name="star" />
            </View>
            <Text style={styles.title}>{product?.title? (product.title.length < 10)? product.title: `${product.title.slice(0, 10)}...`: 'Title'}</Text>
            <Text style={styles.description}>{product?.description? (product.description.length < 20)? product.description: `${product.description.slice(0, 20)}...`: 'Description'}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.discount}>{product?.discount? product.discount: '0'}$</Text>
                <Text style={styles.price}>{product?.price? product.price: '0'}$</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  productImage: {
    width: 160,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  tag: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
  },
  saleTag: {
    backgroundColor: '#DB3022',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
  },
  cartBtn: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5
  },
  cartIcon: {
    fontSize: 20,
    color: '#DB3022',
  },
  wrapper: {
    backgroundColor: '#E7E7E7',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rating: {
    color: '#FFBA49',
    fontSize: 16,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  description: {
    color: 'gray',
    fontSize: 16
  },
  priceContainer: {
    flexDirection: "row",
  },
  price: {
    color: '#DB3022',
    fontSize: 18,
    marginLeft: 5
  },
  discount: {
    color: 'gray',
    fontSize: 18,
    textDecorationLine: 'line-through',
  }
});

export default Card;
