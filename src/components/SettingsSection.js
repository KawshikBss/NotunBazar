import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const SettingsSection = ({title, value = '', handleInput}) => {
    const [extended, setExtended] = useState(false);
    const [text, setText] = useState(value);
    const handleTextChange = (value) => {
        setText(value);
        if (value.length > 0) {
            setExtended(true);
        } else {
            setExtended(false);
        }
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={(value) => handleTextChange(value)} />
      <Text style={extended? styles.extended: styles.title}>{title? title: 'Section'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        marginTop: 8,
    },
    title: {
        color: 'gray',
        fontSize: 20,
        position: 'absolute',
        top: 15,
        left: 35,
    },
    extended: {
        color: 'gray',
        position: 'absolute',
        fontSize: 16,
        top: 4,
        left: 30,
    },
    input: {
        padding: 12,
        marginRight: 5,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    }
});

export default SettingsSection