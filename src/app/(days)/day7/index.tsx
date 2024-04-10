import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Voice Memos

Work with the Microphone and Audio playback
`;
const DayDetailsScreen = () => {
	return (
		<SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
			<Stack.Screen options={{ title: "Day 7: Voice Memos" }} />
			<MarkdownDisplay>{description}</MarkdownDisplay>

			<Link href="/day7/memos" asChild>
				<Button title="Go to Memos" />
			</Link>
		</SafeAreaView>
	);
};

export default DayDetailsScreen;
