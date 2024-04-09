import { Stack } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnboardingScreen() {
	return (
		<SafeAreaView style={styles.page}>
			<Stack.Screen options={{ headerShown: false }} />

			<View style={styles.pageContent}>
				<FontAwesome5
					style={styles.image}
					name="people-arrows"
					size={100}
					color="#CEF202"
				/>

				<View style={styles.footer}>
					<Text style={styles.title}>Track every transaction</Text>
					<Text style={styles.description}>
						Monitor your spending and contribution, ensuring peny aligns with
						your family's aspiration
					</Text>

					<View style={styles.buttonRow}>
						<Text style={styles.buttonText}>Skip</Text>

						<Pressable style={styles.button}>
							<Text style={styles.buttonText}>Continue</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#15141A",
	},
	pageContent: {
		padding: 20,
		flex: 1,
	},
	image: {
		alignSelf: "center",
		margin: 20,
	},
	title: {
		color: "#fdfdfd",
		fontSize: 50,
		fontFamily: "InterBlack",
		letterSpacing: 1.3,
		marginVertical: 10,
	},
	description: {
		color: "gray",
		fontSize: 20,
		fontFamily: "Inter",
		lineHeight: 28,
	},
	footer: {
		marginTop: "auto",
	},
	button: {
		backgroundColor: "#302E38",
		borderRadius: 50,
		alignItems: "center",
		flex: 1,
	},
	buttonRow: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
	buttonText: {
		color: "#fdfdfd",
		fontFamily: "InterSemi",
		fontSize: 16,

		padding: 15,
		paddingHorizontal: 25,
	},
});
