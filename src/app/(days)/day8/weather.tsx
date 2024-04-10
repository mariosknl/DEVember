import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as Location from "expo-location";

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;

type WeatherProps = {
	name: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
};
const WeatherScreen = () => {
	const [weather, setWeather] = useState<WeatherProps>();
	const [location, setLocation] = useState<Location.LocationObject>();
	const [errorMsg, setErrorMsg] = useState("");

	useEffect(() => {
		if (location) {
			fetchWeather();
		}
	}, [location]);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			console.log(location);
			setLocation(location);
		})();
	}, []);

	// fetch data
	const fetchWeather = async () => {
		if (!location) return;

		const results = await fetch(
			`${BASE_URL}?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
		);
		const data = await results.json();
		setWeather(data);
	};

	if (!weather) {
		return <ActivityIndicator />;
	}

	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<View style={styles.container}>
				<Text style={styles.location}>{weather.name}</Text>
				<Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
	location: {
		fontFamily: "Inter",
		fontSize: 30,
	},
	temp: {
		fontFamily: "InterBlack",
		fontSize: 150,
		color: "gray",
	},
});

export default WeatherScreen;
