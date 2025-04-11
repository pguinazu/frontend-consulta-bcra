import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ResultadoCrediticioScreen() {
  const router = useRouter();
  const { data } = useLocalSearchParams<{ data: string }>(); // Supone que pasás la data como JSON string

  const parsedData = JSON.parse(data);
  const nombre = parsedData.results?.denominacion || 'Usuario';
  const entidades = parsedData.results?.periodos?.[0]?.entidades || [];

  const getRiesgo = (situacion: number) => {
    if (situacion === 1 || situacion === 2) return 'Bajo';
    if (situacion === 3) return 'Medio';
    if (situacion === 4) return 'Alto';
    if (situacion === 5) return 'Muy alto';
    return 'Desconocido';
  };

  const getColor = (riesgo: string) => {
    switch (riesgo) {
      case 'Bajo': return '#22c55e';
      case 'Medio': return '#facc15';
      case 'Alto':
      case 'Muy alto': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const renderItem = ({ item }: { item: any }) => {
    const riesgo = getRiesgo(item.situacion);
    return (
      <Pressable
        style={[styles.card, { borderColor: getColor(riesgo) }]}
        onPress={() => router.push({ pathname: '/detalle-entidad', params: { entidad: JSON.stringify(item) } })}
      >
        <Text style={styles.entidad}>{item.entidad}</Text>
        <Text style={styles.monto}>${item.monto} mil</Text>
        <Text style={{ color: getColor(riesgo), fontWeight: 'bold' }}>Riesgo: {riesgo}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={entidades}
        keyExtractor={(item, index) => item.entidad + index}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View style={styles.header}>
            <Ionicons name="checkmark-circle" size={60} color="#4F46E5" style={{ marginBottom: 10 }} />
            <Text style={styles.titulo}>Situación de: </Text>
            <Text style={styles.titulo}>{nombre}</Text>
            <Text style={styles.subtitulo}>Basado en {entidades.length} entidades evaluadas</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Mulish',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#2C2C2C',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  entidad: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  monto: {
    fontSize: 14,
    color: '#dddddd',
    marginBottom: 5,
  },
});
