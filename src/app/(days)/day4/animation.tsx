import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
const AnimationScreen = () => {
	const animation = useRef<LottieView>(null);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "black",
			}}
		>
			<Stack.Screen options={{ headerShown: false }} />
			<LottieView
				autoPlay
				ref={animation}
				style={{
					width: "80%",
					maxWidth: 400,
					height: 200,
				}}
				// Find more Lottie files at https://lottiefiles.com/featured
				source={require("@assets/lottie/netflix.json")}
			/>
		</View>
	);
};
export default AnimationScreen;
const styles = StyleSheet.create({});
