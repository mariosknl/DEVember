import { View, Text } from "react-native";
import { Stack } from "expo-router";
const DayDetailsScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ title: "Day1" }} />
			<Text>Day Details Screen</Text>
		</View>
	);
};

export default DayDetailsScreen;
