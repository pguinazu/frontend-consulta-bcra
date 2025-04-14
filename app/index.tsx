import CuilInput from "@/components/cuilInput";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
//service getCreditSituationByCuil
import { getCreditSituationByCuil as getCreditSituation } from '@/services/bcraService';
import React from "react";
import { useRouter } from "expo-router";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cuilSchema } from '@/validation/cuilSchema'; // ruta según tu estructura

export default function Index() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const getCreditSituationByCuil = async () => {
    try {
      //TODO: get info from public api
      // getCreditSituation(cuil);
      setLoading(true);
      const response = await getCreditSituation(control._formValues.cuil);
      setLoading(false);
  
      //sin datos
      if (!response?.results.periodos?.length) {
        router.navigate({
          pathname: '/consulta-bcra-error',
          params: {
            message: 'No se encontraron datos para el CUIL ingresado.',
            suggestion: 'Puede que no tenga un historial crediticio registrado en el BCRA.'
          }
        });
        return;
      }
  
      // const json = await response.json();
      console.log('response json', response);
      router.push({
        pathname: '/resultado-crediticio',
        params: {
          data: JSON.stringify(response)
        }
      });
    } catch (error: any) {
      setLoading(false);
      console.log('error', error);
      
      router.push({
        pathname: '/consulta-bcra-error',
        params: {
          message: 'Ocurrio un error al consultar la situación crediticia.',
          suggestion: error.message
        }
      })
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cuilSchema),
    mode: 'onChange', //activa validacion al escribir para no esperar submit
    reValidateMode: 'onChange', // vuelve a validar en cambios posteriores
  });

  return (
    <View
      style={styles.container}
    >
      <View style={styles.container}>
        <Ionicons name="wallet" size={100} color="#4F46E5" />
        <Text style={styles.title}>Situación crediticia por CUIL</Text>
        {/* //CUIL */}
        <View style={styles.cuilInputContainer}>
          <Controller
            control={control}
            name="cuil"
            render={({ field: { value, onChange } }) => (
              <CuilInput
                value={value}
                onChangeText={onChange}
                error={errors.cuil?.message}
              />
            )}
          />
        </View>
        <Pressable style={ !control._formValues.cuil || errors.cuil || loading ? styles.btnDisabled : styles.btn} 
          onPress={handleSubmit(getCreditSituationByCuil)} disabled={ !control._formValues.cuil || errors.cuil?.message && errors.cuil?.message?.length > 0 || loading}> 
          <Text style={errors.cuil || loading ? styles.btnTxtDisabled : styles.btnTxt}>Consultar</Text>
        </Pressable>
      </View>
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
  btnDisabled: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#6B7280',
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
  btnTxt: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
  },
  btnTxtDisabled: {
    color: "#D1D5DB",
    textAlign: "center",
    fontSize: 20,
  }
});