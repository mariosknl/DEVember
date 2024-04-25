import { View, Text, Button } from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const ProtectedScreen = () => {
	const { signOut } = useAuthenticator();
	return (
		<View style={{ padding: 10 }}>
			<Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello there</Text>
			<Text style={{ fontFamily: "InterSemi", fontSize: 30, color: "gray" }}>
				You should see this page only if you are authenticated
			</Text>

			<Button title="Sign out" onPress={() => signOut()} />
		</View>
	);
};
export default ProtectedScreen;
