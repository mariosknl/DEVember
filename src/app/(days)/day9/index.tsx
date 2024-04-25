import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { Link, Stack } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Authentication
AWS Amplify v6 Authentication
`;
const DayDetailsScreen = () => {
	return (
		<SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
			<Stack.Screen options={{ title: "Day 9: Auth" }} />
			<MarkdownDisplay>{description}</MarkdownDisplay>

			<Link href="/day9/protected" asChild>
				<Button title="Go to Protected Page" />
			</Link>

			<Link href="/day9/auth/sign-in" asChild>
				<Button title="Go to Sign" />
			</Link>
		</SafeAreaView>
	);
};

export default DayDetailsScreen;
