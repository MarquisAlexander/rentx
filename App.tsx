import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from "styled-components";
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
	Archivo_400Regular,
	Archivo_500Medium,
	Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "./src/screens/Home";
import theme from "./src/styles/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Archivo_400Regular,
		Archivo_500Medium,
		Archivo_600SemiBold,
	});

	if (fontsLoaded) {
		SplashScreen.preventAutoHideAsync()
	} else {
		SplashScreen.hideAsync()
	}

	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}
