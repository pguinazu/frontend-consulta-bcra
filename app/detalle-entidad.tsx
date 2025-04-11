import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function DetalleEntidad() {
  const { entidad } = useLocalSearchParams<{ entidad: string }>();
  const data = JSON.parse(entidad);

  const formatBoolean = (val: boolean) => (val ? 'Sí' : 'No');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.titulo}>{data.entidad}</Text>
      <View style={styles.linea} />
      <Text style={styles.item}><Text style={styles.label}>Monto:</Text> ${data.monto}</Text>
      <Text style={styles.item}><Text style={styles.label}>Situación:</Text> {data.situacion}</Text>
      <Text style={styles.item}><Text style={styles.label}>Fecha última situación 1:</Text> {data.fechaSit1}</Text>
      <Text style={styles.item}><Text style={styles.label}>Días de atraso:</Text> {data.diasAtrasoPago}</Text>
      <Text style={styles.item}><Text style={styles.label}>Refinanciaciones:</Text> {formatBoolean(data.refinanciaciones)}</Text>
      <Text style={styles.item}><Text style={styles.label}>Recategorización obligatoria:</Text> {formatBoolean(data.recategorizacionOblig)}</Text>
      <Text style={styles.item}><Text style={styles.label}>Situación jurídica:</Text> {formatBoolean(data.situacionJuridica)}</Text>
      <Text style={styles.item}><Text style={styles.label}>Irrecuperable por disposición técnica:</Text> {formatBoolean(data.irrecDisposicionTecnica)}</Text>
      <Text style={styles.item}><Text style={styles.label}>En revisión:</Text> {formatBoolean(data.enRevision)}</Text>
      <Text style={styles.item}><Text style={styles.label}>En proceso judicial:</Text> {formatBoolean(data.procesoJud)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Mulish',
    marginBottom: 10,
  },
  linea: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
  item: {
    color: '#dddddd',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Mulish'
  },
  label: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
