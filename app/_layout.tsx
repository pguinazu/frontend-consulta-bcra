import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StyleSheet, useColorScheme, View } from "react-native";

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  return (
    // <ThemeProvider>
    <View style={styles.darkContainer}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" /> 
        <Stack.Screen name="resultado-crediticio"
          options={{
            title: '',
            headerShown: true,
            // headerBackTitleVisible: false,
            headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
          }} />
        <Stack.Screen name="detalle-entidad"
          options={{ title: '',
          headerShown: true,
          headerTintColor: '#ffffff', 
          headerStyle: { backgroundColor: '#1E1E1E' } 
          }} />
        <Stack.Screen name="consulta-bcra-error"
          options={{ title: '',
          headerShown: true,
          headerTintColor: '#ffffff', 
          headerStyle: { backgroundColor: '#1E1E1E' } 
          }} />
      </Stack>
    </View>
    // </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});