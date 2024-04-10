import { View, Text, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

export type CustomMarkerProps = {
	apartment: {
		id: number;
		latitude: number;
		longitude: number;
		title: string;
		price: number;
	};
	onPress: () => void;
};

const CustomMarker = ({ apartment, onPress }: CustomMarkerProps) => {
	return (
		<Marker
			onPress={onPress}
			key={apartment.id}
			coordinate={{
				latitude: apartment.latitude,
				longitude: apartment.longitude,
			}}
			title={apartment.title}
		>
			<View style={styles.marker}>
				<Text style={styles.text}>€ {apartment.price}</Text>
			</View>
		</Marker>
	);
};
export default CustomMarker;

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
