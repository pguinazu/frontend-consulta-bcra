import CuilInput from "@/components/cuilInput";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
//service getCreditSituationByCuil
import { getCreditSituationByCuil as getCreditSituation } from '@/services/bcraService';
import React from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const [cuil, setCuil] = React.useState('');
  const router = useRouter();
  const getCreditSituationByCuil = async () => {
    console.log('cuil', cuil);
    
    //TODO: get info from public api
    // getCreditSituation(cuil);
    const response = await getCreditSituation(cuil);
    // const json = await response.json();
    console.log('response json', response);
    router.push({
      pathname: '/resultado-crediticio',
      params: {
        data: JSON.stringify(response)
      }
    });
  }

  return (
    <View
      style={styles.container}
    >
      <Ionicons name="wallet" size={100} color="#4F46E5" />
      <Text style={styles.title}>Situación crediticia por CUIL</Text>
      {/* //CUIL */}
      <View style={styles.cuilInputContainer}>
        <CuilInput value={cuil} setCuil={(val) => setCuil(val)} />
      </View>
      <Pressable style={styles.btn} onPress={getCreditSituationByCuil}> 
        <Text style={styles.btnTxt}>Consultar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginHorizontal: 10,
    textAlign: "center",
    fontFamily: "Mulish",
    width: 300
  },
  cuilInputContainer: {
    marginBottom: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    // width: "80%",
  },
  btn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  btnTxt: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
  }
});