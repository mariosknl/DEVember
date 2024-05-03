import { Task } from "@/app/(days)/day15/todo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Reanimated, { JumpingTransition } from "react-native-reanimated";

const AnimatedView = Animated.createAnimatedComponent(View);

const RightActions = ({
	dragAnimatedValue,
	onDelete,
}: {
	dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
	onDelete: () => void;
}) => {
	const animatedStyles = {
		transform: [
			{
				translateX: dragAnimatedValue.interpolate({
					inputRange: [-40, 0],
					outputRange: [0, 40],
					extrapolate: "clamp",
				}),
			},
		],
	};
	return (
		<AnimatedView
			style={[
				{
					backgroundColor: "crimson",
					alignItems: "center",
					flexDirection: "row",
					paddingHorizontal: 10,
				},
				animatedStyles,
			]}
		>
			<MaterialCommunityIcons
				onPress={onDelete}
				name="delete"
				size={20}
				color="white"
			/>
		</AnimatedView>
	);
};

type TaskListItem = {
	task: Task;
	onItemPressed: () => void;
	onDelete: () => void;
};

const TaskListItem = ({ task, onItemPressed, onDelete }: TaskListItem) => {
	return (
		<Reanimated.View layout={JumpingTransition}>
			<Swipeable
				renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
					<RightActions
						dragAnimatedValue={dragAnimatedValue}
						onDelete={onDelete}
					/>
				)}
			>
				<Pressable onPress={onItemPressed} style={styles.taskContainer}>
					<MaterialCommunityIcons
						name={
							task.isFinished
								? "checkbox-marked-circle-outline"
								: "checkbox-blank-circle-outline"
						}
						size={24}
						color={task.isFinished ? "gray" : "dimgray"}
					/>
					<Text
						style={[
							styles.taskTitle,
							{
								textDecorationLine: task.isFinished ? "line-through" : "none",
								color: task.isFinished ? "lightgray" : "dimgray",
							},
						]}
					>
						{task.title}
					</Text>
				</Pressable>
			</Swipeable>
		</Reanimated.View>
	);
};

const styles = StyleSheet.create({
	taskContainer: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	taskTitle: {
		fontFamily: "InterSemi",
		fontSize: 15,
		flex: 1,
	},
});
export default TaskListItem;
