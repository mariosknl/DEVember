import {
	AmaticSC_400Regular,
	AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	let [fontsLoaded, fontError] = useFonts({
		Inter: Inter_900Black,
		Amatic: AmaticSC_400Regular,
		AmaticBold: AmaticSC_700Bold,
	});

	useEffect(() => {
		if (fontsLoaded || !fontError) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name="index"
				options={{
					title: "DEVember",
				}}
			/>
		</Stack>
	);
};
export default RootLayout;
