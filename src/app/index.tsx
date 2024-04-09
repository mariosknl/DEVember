import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";

import {
	AmaticSC_400Regular,
	AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import DayListItem from "../components/core/DayListItem";

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
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
		<View style={styles.container}>
			<FlatList
				data={days}
				contentContainerStyle={styles.content}
				columnWrapperStyle={styles.column}
				numColumns={2}
				renderItem={({ item }) => <DayListItem day={item} />}
			/>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		gap: 10,
		padding: 10,
	},
	column: {
		gap: 10,
	},
});
