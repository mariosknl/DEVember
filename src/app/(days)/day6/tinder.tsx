import TinderCard from "@/components/day6/TinderCard";
import { Stack } from "expo-router";
import { View } from "react-native";
import { useSharedValue, withSpring } from "react-native-reanimated";
import {
	GestureDetector,
	PanGesture,
	Gesture,
} from "react-native-gesture-handler";

const dummuUsers = [
	{
		id: 1,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg",
		name: "Dani",
	},
	{
		id: 2,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg",
		name: "Jon",
	},
	{
		id: 3,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg",
		name: "Dani",
	},
	{
		id: 4,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg",
		name: "Alice",
	},
	{
		id: 5,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg",
		name: "Dani",
	},
	{
		id: 6,
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg",
		name: "Kelsey",
	},
];

const TinderScreen = () => {
	const activeIndex = useSharedValue(0);
	const translationX = useSharedValue(0);

	const gesture = Gesture.Pan()
		.onBegin((event) => console.log("onBegin", event))
		.onStart((event) => console.log("onStart", event))
		.onChange((event) => {
			translationX.value = event.translationX;
		})
		.onUpdate((event) => console.log("onUpdate", event))
		.onEnd((event) => {
			translationX.value = withSpring(0);
		})
		.onFinalize((event) => console.log("onFinalize", event));

	return (
		<GestureDetector gesture={gesture}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Stack.Screen options={{ headerShown: false }} />

				{dummuUsers.map((user, index) => (
					<TinderCard
						key={user.id}
						user={user}
						numOfCards={dummuUsers.length}
						index={index}
						activeIndex={activeIndex}
						translationX={translationX}
					/>
				))}
			</View>
		</GestureDetector>
	);
};
export default TinderScreen;
