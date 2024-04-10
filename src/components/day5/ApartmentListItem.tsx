import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import apartments from "@assets/data/day5/apartments.json";

export type ApartmentListItemProps = {
	apartment: (typeof apartments)[0];
	containerStyle?: ViewStyle;
};

const ApartmentListItem = ({
	apartment,
	containerStyle,
}: ApartmentListItemProps) => {
	return (
		<View style={[styles.card, containerStyle]}>
			<Image source={{ uri: apartment.image }} style={styles.image} />
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{apartment.title}</Text>
				<Text style={styles.description}>
					Stay at this apartment for an affordable price
				</Text>

				<View style={styles.footer}>
					<Text style={styles.price}>€ {apartment.price} night</Text>
					<Text style={styles.price}>
						⭐︎ {apartment.rating} ({apartment.numberOfStars})
					</Text>
				</View>
			</View>
		</View>
	);
};
export default ApartmentListItem;

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",

		margin: 10,

		flexDirection: "row",
		borderRadius: 20,
		overflow: "hidden",
	},
	image: {
		width: 150,
		aspectRatio: 1,
	},
	rightContainer: {
		padding: 10,
		flex: 1,
	},
	title: {
		fontFamily: "InterBold",
		marginBottom: 10,
		fontSize: 16,
	},
	description: {
		color: "gray",
	},
	price: {
		fontFamily: "InterBold",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "auto",
	},
});
