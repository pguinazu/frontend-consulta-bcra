import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface ErrorScreenProps {
  message: string;
  suggestion?: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = () => {
  const { message, suggestion } = useLocalSearchParams();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* warning Ionicons, color alternativo #4F46E5 */}
      <Ionicons name="warning" size={120} color="#4F46E5" />
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>{suggestion}</Text>
      {/* {suggestion && <Text style={styles.suggestion}>{suggestion}</Text>} */}

      <Pressable onPress={handleBack} style={styles.button}>
        <Text style={styles.buttonText}>Volver</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 10,
  },
  suggestion: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ErrorScreen;
