import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  return (
    // <ThemeProvider>
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
      </Stack>
    // </ThemeProvider>
  )
}
