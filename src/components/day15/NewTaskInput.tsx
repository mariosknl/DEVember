import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Task } from "@/app/(days)/day15/todo";

type NewTaskInput = {
	onAdd: (newTask: Task) => void;
};

const NewTaskInput = ({ onAdd }: NewTaskInput) => {
	const [newTask, setNewTask] = useState("");

	return (
		<View style={styles.taskContainer}>
			<MaterialCommunityIcons
				name="checkbox-blank-circle-outline"
				size={24}
				color="dimgray"
			/>
			<TextInput
				value={newTask}
				onChangeText={setNewTask}
				style={styles.input}
				placeholder="Add a new task"
				onEndEditing={() => {
					if (!newTask) return;
					onAdd({
						title: newTask,
						isFinished: false,
					});
					setNewTask("");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	taskContainer: {
		padding: 5,
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	input: {
		flex: 1,
		fontFamily: "InterSemi",
		fontSize: 15,
		color: "dimgray",
	},
});
export default NewTaskInput;
