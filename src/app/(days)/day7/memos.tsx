import { useState } from "react";
import {
	View,
	StyleSheet,
	Button,
	FlatList,
	FlatListComponent,
	Text,
	Pressable,
} from "react-native";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio";

export default function MemosScreen() {
	const [recording, setRecording] = useState<Recording>();
	const [permissionResponse, requestPermission] = Audio.usePermissions();
	const [memos, setMemos] = useState<string[]>([]);

	async function startRecording() {
		try {
			if (permissionResponse?.status !== "granted") {
				console.log("Requesting permission..");
				await requestPermission();
			}
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});

			console.log("Starting recording..");
			const { recording } = await Audio.Recording.createAsync(
				Audio.RecordingOptionsPresets.HIGH_QUALITY
			);
			setRecording(recording);
			console.log("Recording started");
		} catch (err) {
			console.error("Failed to start recording", err);
		}
	}

	async function stopRecording() {
		if (!recording) return;

		console.log("Stopping recording..");
		setRecording(undefined);
		await recording.stopAndUnloadAsync();
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
		});
		const uri = recording.getURI();
		console.log("Recording stopped and stored at", uri);

		if (uri) {
			setMemos((existingMemos) => [uri, ...existingMemos]);
		}
	}

	return (
		<View style={styles.container}>
			<FlatList data={memos} renderItem={({ item }) => <Text>{item}</Text>} />

			<View style={styles.footer}>
				<Pressable
					style={styles.recordButton}
					onPress={recording ? stopRecording : startRecording}
				>
					<View style={styles.redCircle} />
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
	},
	footer: {
		backgroundColor: "white",
		height: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	recordButton: {
		borderRadius: 60,

		borderWidth: 3,
		borderColor: "gray",
		padding: 3,
	},
	redCircle: {
		backgroundColor: "orangered",
		height: 60,
		width: 60,
		borderRadius: 30,
	},
});
