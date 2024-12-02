import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from "styled-components/native"
import * as Font from 'expo-font';
import { Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins"
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import theme from './src/global/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      Poppins_400Regular,
      Poppins_600SemiBold,
      Poppins_700Bold,
      Poppins_500Medium
    }).then(() => setAppIsReady(true)).catch(console.warn);
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='dark'/> 
      <View onLayout={onLayoutRootView}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

