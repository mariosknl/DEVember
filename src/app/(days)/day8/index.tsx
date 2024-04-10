import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Weather App

Fetch weather data and display it
`;
const DayDetailsScreen = () => {
	return (
		<SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
			<Stack.Screen options={{ title: "Day 8: Weather App" }} />
			<MarkdownDisplay>{description}</MarkdownDisplay>

			<Link href="/day8/weather" asChild>
				<Button title="Go to Weather App" />
			</Link>
		</SafeAreaView>
	);
};

export default DayDetailsScreen;
