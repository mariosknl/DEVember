import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "@assets/data/day5/apartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
const AirbnbScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ headerShown: false }} />

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: 37.9838,
					longitude: 23.7275,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				{apartments.map((apartment) => (
					<CustomMarker key={apartment.id} apartment={apartment} />
				))}
			</MapView>

			{/* Display selected apartment */}
			<ApartmentListItem apartment={apartments[0]} />
		</View>
	);
};

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
	marker: {
		backgroundColor: "white",
		padding: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 20,
	},
	text: {
		fontFamily: "InterBold",
	},
});

export default AirbnbScreen;
