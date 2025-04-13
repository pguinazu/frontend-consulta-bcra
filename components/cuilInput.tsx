import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
    value: string;
    onChangeText: (cuil: string) => void,
    error: string | undefined
};

const CuilInput = ({value, onChangeText, error}: Props) => {
  return (
    <View>
        <TextInput
          style={error ? styles.inputError : styles.input}
          onChangeText={onChangeText}
          value={value}
          keyboardType='numeric'
          placeholder='00-00000000-0'
          placeholderTextColor='#9CA3AF'
          textAlign='center'
          maxLength={11}
        />
        {error 
          ? <Text style={styles.error}>{error}</Text>
          : <Text style={styles.subtitle}>Consultá tu estado crediticio en segundos, con datos oficiales del BCRA</Text>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 360,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#9CA3AF',
    fontSize: 20,
    color: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: "Mulish",
    alignSelf: 'center'
  },
  inputError: {
    height: 60,
    width: 360,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#EF4444',
    fontSize: 20,
    color: '#f0f0f0',
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: "Mulish",
    alignSelf: 'center'
  },
  subtitle: {
    fontSize: 15,
    color: "#ffffff",
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: "Mulish",
  },
  error: {
    fontSize: 15,
    color: "#EF4444",
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: "Mulish",
  }
});

export default CuilInput;