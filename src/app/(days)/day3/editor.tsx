import MarkdownDisplay from "@components/day3/MarkdownDisplay";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const template = `# Markdown Editor

Hello **World**!
`;

const EditorScreen = () => {
	const [content, setContent] = useState(template);
	const [tab, setTab] = useState("edit");

	return (
		<View style={styles.page}>
			<View style={styles.tabsContainer}>
				<Pressable
					onPress={() => setTab("edit")}
					style={[
						styles.tab,
						{ borderColor: tab === "edit" ? "mediumorchid" : "gray" },
					]}
				>
					<Text style={styles.tabText}>Edit</Text>
				</Pressable>
				<Pressable
					onPress={() => setTab("preview")}
					style={[
						styles.tab,
						{ borderColor: tab === "preview" ? "mediumorchid" : "gray" },
					]}
				>
					<Text style={styles.tabText}>Preview</Text>
				</Pressable>
			</View>

			{tab === "edit" ? (
				<TextInput
					value={content}
					onChangeText={setContent}
					numberOfLines={50}
					multiline
					style={styles.input}
				/>
			) : (
				<MarkdownDisplay>{content}</MarkdownDisplay>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		backgroundColor: "whitesmoke",
		flex: 1,
		padding: 10,
	},
	input: {
		backgroundColor: "#fff",
		flex: 1,
		borderRadius: 10,
		fontSize: 16,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 20,
		paddingTop: 10,
	},
	tabsContainer: {
		flexDirection: "row",
		gap: 10,
		marginVertical: 10,
	},
	tab: {
		flex: 1,
		padding: 10,
		borderColor: "gray",
		borderWidth: 2,
		borderRadius: 10,
		alignItems: "center",
	},
	tabText: {
		fontFamily: "InterBold",
	},
});

export default EditorScreen;
