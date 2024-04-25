import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { signIn } from "aws-amplify/auth";
import { router } from "expo-router";

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onSignInPressed = async () => {
		setError("");
		try {
			const { isSignedIn } = await signIn({ username, password });

			if (isSignedIn) {
				router.push("/(days)/day9/protected");
			}
		} catch (e: any) {
			console.log(e);
			setError(e.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>SignIn</Text>

			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>

			<Button title="Sign In" onPress={onSignInPressed} />
			{error !== "" && <Text style={{ color: "red" }}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		justifyContent: "center",
		flex: 1,
	},
	title: {
		fontFamily: "InterSemi",
		fontSize: 24,
		color: "dimgray",
	},
	input: {
		borderWidth: 1,
		borderColor: "gainsboro",
		padding: 10,
		marginVertical: 10,
		backgroundColor: "white",
		borderRadius: 5,
	},
});

export default SignIn;
