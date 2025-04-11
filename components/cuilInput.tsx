import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
type Props = {
    value: string;
    setCuil: (cuil: string) => void
};

const CuilInput = ({value, setCuil}: Props) => {
  return (
    <View>
        <TextInput
          style={styles.input}
          onChangeText={setCuil}
          value={value}
          keyboardType='numeric'
          placeholder='00-00000000-0'
          placeholderTextColor='#9CA3AF'
          textAlign='center'
          maxLength={11}
        />
        <Text style={styles.subtitle}>Consultá tu estado crediticio en segundos, con datos oficiales del BCRA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 'auto',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#9CA3AF',
    fontSize: 20,
    color: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: "Mulish",
  },
  subtitle: {
    fontSize: 15,
    color: "#ffffff",
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: "Mulish",
  },
});

export default CuilInput;