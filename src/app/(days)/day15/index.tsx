import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Todo App

Ultimate Todo App
`;
const DayDetailsScreen = () => {
	return (
		<SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
			<Stack.Screen options={{ title: "Day 15: Todo" }} />
			<MarkdownDisplay>{description}</MarkdownDisplay>

			<Link href="/day15/todo" asChild>
				<Button title="Go to TODO" />
			</Link>
		</SafeAreaView>
	);
};

export default DayDetailsScreen;
