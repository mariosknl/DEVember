import NewTaskInput from "@/components/day15/NewTaskInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import {
	FlatList,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type Task = {
	id?: number;
	title: string;
	isFinished: boolean;
};

const dummyTasks: Task[] = [
	{ title: "Setup Day15 structure", isFinished: true },
	{ title: "Render a list of tasks", isFinished: false },
	{ title: "Add a new task", isFinished: false },
	{ title: "Change the status of a task", isFinished: false },
	{ title: "Separate in 2 tabs: todo and complete", isFinished: false },
];

const TodoScreen = () => {
	const [tasks, setTasks] = useState<Task[]>(dummyTasks);

	const onItemPressed = (index: number) => {
		setTasks((currentTasks) => {
			const updatedTasks = [...currentTasks];
			updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
			return updatedTasks;
		});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.page}
			keyboardVerticalOffset={100}
		>
			<Stack.Screen options={{ headerShown: false }} />

			<SafeAreaView>
				<FlatList
					data={tasks}
					contentContainerStyle={{ gap: 5, padding: 10 }}
					renderItem={({ item, index }) => (
						<Pressable
							onPress={() => onItemPressed(index)}
							style={styles.taskContainer}
						>
							<MaterialCommunityIcons
								name={
									item.isFinished
										? "checkbox-marked-circle-outline"
										: "checkbox-blank-circle-outline"
								}
								size={24}
								color="dimgray"
							/>
							<Text
								style={[
									styles.taskTitle,
									{
										textDecorationLine: item.isFinished
											? "line-through"
											: "none",
									},
								]}
							>
								{item.title}
							</Text>
						</Pressable>
					)}
					ListFooterComponent={
						<NewTaskInput
							onAdd={(newTodo: Task) =>
								setTasks((currentTasks) => [...currentTasks, newTodo])
							}
						/>
					}
				/>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	taskContainer: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	page: {
		padding: 10,
		backgroundColor: "#fff",
		flex: 1,
	},
	taskTitle: {
		fontFamily: "InterSemi",
		fontSize: 15,
		color: "dimgray",
		flex: 1,
	},
});

export default TodoScreen;
