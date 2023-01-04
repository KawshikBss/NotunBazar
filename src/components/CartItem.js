import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CartItem = ({item}) => {
    const [amount, setAmount] = useState(item?.amount? item.amount: 1);
    const updateAmount = (amount) => {
        setAmount(currAmount => {
            return (currAmount + amount >= 0)? currAmount + amount: currAmount;
        })
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageLink}>
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
        <View style={styles.wrapper}>
            <View style={styles.wrapperRow}>
            <TouchableOpacity style={styles.productLink}>
                <Text style={styles.title}>{item?.title? item.title: 'Title'}</Text>
            </TouchableOpacity>
                    <TouchableOpacity onPress={() => setAmount(0)} style={styles.removeBtn}>
                        <FontAwesome5 style={styles.removeBtnText} name='trash' />
                    </TouchableOpacity>
            </View>
            <View style={styles.wrapperRow}>
                <View style={styles.countContainer}>
                    <TouchableOpacity onPress={() => updateAmount(-1)} style={styles.countBtn}>
                        <AntDesign style={styles.countBtnText} name='minuscircle' />
                    </TouchableOpacity>
                    <Text style={styles.count}>{amount}</Text>
                    <TouchableOpacity onPress={() => updateAmount(1)} style={styles.countBtn}>
                        <AntDesign style={styles.countBtnText} name='pluscircle' />
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>{item?.price? item.price: '0'}$</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  wrapper: {
    flex: 2,
    justifyContent: 'space-evenly',
    padding: 15,
  },
  wrapperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
  imageLink: {
    flex: 1,
  },
  productLink: {},
  title: {
    fontSize: 20,
  },
  removeBtn: {},
  removeBtnText: {
    fontSize: 20,
    color: '#DB3022',
    opacity: 0.5
},
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    },
  count: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  countBtn: {

  },
  countBtnText: {
    fontSize: 26,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {width: -1, height: 1},
  },
  price: {
    fontSize: 20,
  }
});

export default CartItem