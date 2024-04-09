import { FontAwesome5 } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
	Directions,
	Gesture,
	GestureDetector,
} from "react-native-gesture-handler";

import Animated, {
	FadeIn,
	FadeOut,
	SlideInLeft,
	SlideInRight,
	SlideOutLeft,
	SlideOutRight,
} from "react-native-reanimated";

const onboardingSteps = [
	{
		icon: "snowflake",
		title: "Welcome to #DEVember",
		description: "Daily React Native tutorials during December",
	},
	{
		icon: "people-arrows",
		title: "Learn & grow together",
		description: "Learn by building 24 projects with React Native & Expo",
	},
	{
		icon: "book-reader",
		title: "Education for children",
		description:
			"Contribute to the fundraiser to provide education for children in need",
	},
];

export default function OnboardingScreen() {
	const [screenIndex, setScreenIndex] = useState(0);

	const data = onboardingSteps[screenIndex];

	const onContinue = () => {
		const isLastScreen = screenIndex === onboardingSteps.length - 1;
		if (isLastScreen) {
			endOnboarding();
		} else {
			setScreenIndex((prev) => prev + 1);
		}
	};

	const onBack = () => {
		const isFirstScreen = screenIndex === 0;
		if (isFirstScreen) {
			endOnboarding();
		} else {
			setScreenIndex((prev) => prev - 1);
		}
	};

	const endOnboarding = () => {
		setScreenIndex(0);
		router.back();
	};

	const swipes = Gesture.Simultaneous(
		Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
		Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
	);

	return (
		<SafeAreaView style={styles.page}>
			<Stack.Screen options={{ headerShown: false }} />
			<StatusBar style="light" />

			<View style={styles.stepIndicatorContainer}>
				{onboardingSteps.map((step, index) => (
					<View
						style={[
							styles.stepIndicator,
							{ backgroundColor: index === screenIndex ? "#CEF202" : "gray" },
						]}
						key={index}
					/>
				))}
			</View>

			<GestureDetector gesture={swipes}>
				<View style={styles.pageContent} key={screenIndex}>
					<Animated.View entering={FadeIn} exiting={FadeOut}>
						<FontAwesome5
							style={styles.image}
							name={data.icon}
							size={150}
							color="#CEF202"
						/>
					</Animated.View>

					<View style={styles.footer}>
						<Animated.Text
							entering={SlideInRight}
							exiting={SlideOutLeft}
							style={styles.title}
						>
							{data.title}
						</Animated.Text>
						<Animated.Text
							entering={FadeIn.delay(50)}
							exiting={FadeOut}
							style={styles.description}
						>
							{data.description}
						</Animated.Text>

						<View style={styles.buttonRow}>
							<Text onPress={endOnboarding} style={styles.buttonText}>
								Skip
							</Text>

							<Pressable onPress={onContinue} style={styles.button}>
								<Text style={styles.buttonText}>Continue</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</GestureDetector>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#15141A",
	},
	pageContent: {
		padding: 20,
		flex: 1,
	},
	image: {
		alignSelf: "center",
		margin: 20,
		marginTop: 70,
	},
	title: {
		color: "#fdfdfd",
		fontSize: 50,
		fontFamily: "InterBlack",
		letterSpacing: 1.3,
		marginVertical: 10,
	},
	description: {
		color: "gray",
		fontSize: 20,
		fontFamily: "Inter",
		lineHeight: 28,
	},
	footer: {
		marginTop: "auto",
	},
	button: {
		backgroundColor: "#302E38",
		borderRadius: 50,
		alignItems: "center",
		flex: 1,
	},
	buttonRow: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},
	buttonText: {
		color: "#fdfdfd",
		fontFamily: "InterSemi",
		fontSize: 16,

		padding: 15,
		paddingHorizontal: 25,
	},

	//steps
	stepIndicatorContainer: {
		flexDirection: "row",
		gap: 8,
		marginHorizontal: 15,
	},
	stepIndicator: {
		flex: 1,
		height: 3,
		backgroundColor: "gray",
		borderRadius: 10,
	},
});
