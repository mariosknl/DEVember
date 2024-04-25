import { View, Text } from "react-native";
const ProtectedScreen = () => {
	return (
		<View style={{ padding: 10 }}>
			<Text style={{ fontFamily: "InterBold", fontSize: 30 }}>Hello there</Text>
			<Text style={{ fontFamily: "InterSemi", fontSize: 30, color: "gray" }}>
				You should see this page only if you are authenticated
			</Text>
		</View>
	);
};
export default ProtectedScreen;
