import LottieView from "lottie-react-native";
import { useRef } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const AnimatedSplashScreen = ({
	onAnimationFinish = () => {},
}: {
	onAnimationFinish?: () => void;
}) => {
	const animation = useRef<LottieView>(null);
	return (
		<Animated.View
			entering={FadeIn.duration(1000)}
			exiting={FadeOut.duration(300)}
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "black",
			}}
		>
			<LottieView
				autoPlay
				ref={animation}
				onAnimationFinish={onAnimationFinish}
				loop={false}
				style={{
					width: "80%",
					maxWidth: 400,
					height: 200,
				}}
				// Find more Lottie files at https://lottiefiles.com/featured
				source={require("@assets/lottie/netflix.json")}
			/>
		</Animated.View>
	);
};
export default AnimatedSplashScreen;
