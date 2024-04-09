import { PropsWithChildren } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
			<Markdown style={markdownStyles}>{children}</Markdown>
		</ScrollView>
	);
};

const markdownStyles = StyleSheet.create({
	heading1: {
		fontWeight: "bold",
		color: "#212020",
		marginTop: 15,
		marginBottom: 10,
		lineHeight: 40,
	},
	heading2: {
		fontFamily: "InterBold",
		color: "#404040",

		marginTop: 15,
		marginBottom: 10,
		lineHeight: 30,
	},
	body: {
		fontSize: 16,
		lineHeight: 22,
	},
});

const styles = StyleSheet.create({
	page: {
		backgroundColor: "#fff",
		flex: 1,
		padding: 10,
		borderRadius: 10,
	},
});

export default MarkdownDisplay;
