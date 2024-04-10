import { Stack } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "@assets/data/day5/apartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem, {
	ApartmentListItemProps,
} from "@/components/day5/ApartmentListItem";
import { useMemo, useRef, useState } from "react";
import BottomSheet, {
	BottomSheetView,
	BottomSheetFlatList,
} from "@gorhom/bottom-sheet";

const AirbnbScreen = () => {
	const [selectedApartment, setSelectedApartment] =
		useState<ApartmentListItemProps | null>(null);
	const [mapRegion, setMapRegion] = useState({
		latitude: 37.9838,
		longitude: 23.7275,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => [75, "50%", "90%"], []);

	return (
		<View>
			<Stack.Screen options={{ headerShown: false }} />

			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				// initialRegion={mapRegion}
				region={mapRegion}
			>
				{apartments.map((apartment) => (
					<CustomMarker
						key={apartment.id}
						apartment={apartment}
						onPress={() => setSelectedApartment(apartment)}
					/>
				))}
			</MapView>

			{/* Display selected apartment */}
			{selectedApartment && (
				<ApartmentListItem
					apartment={selectedApartment}
					containerStyle={styles.containerStyle}
				/>
			)}

			<BottomSheet
				ref={bottomSheetRef}
				// onChange={handleSheetChanges}
				snapPoints={snapPoints}
				index={0}
				onChange={(index) => console.log("On Change", index)}
				onAnimate={(from, to) => console.log("From:", from, "To:", to)}
			>
				<BottomSheetView style={styles.contentContainer}>
					<Text style={styles.listTitle}>Over {apartments.length} places</Text>

					<BottomSheetFlatList
						data={apartments}
						keyExtractor={(item) => item.id.toString()}
						contentContainerStyle={{ gap: 10 }}
						renderItem={({ item }) => <ApartmentListItem apartment={item} />}
					/>
				</BottomSheetView>
			</BottomSheet>
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
	contentContainer: {
		flex: 1,
		alignItems: "center",
	},
	containerStyle: {
		position: "absolute",
		bottom: 100,
		right: 10,
		left: 10,
	},
	listTitle: {
		textAlign: "center",
		fontFamily: "InterSemi",
		fontSize: 16,
		marginVertical: 5,
		marginBottom: 20,
	},
});

export default AirbnbScreen;
