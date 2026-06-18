import { Platform } from "react-native";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export const useGradualAnimation = () => {
  const PADDING_BOTTOM = Platform.OS === "ios" ? 20 : 0;
  const height = useSharedValue(PADDING_BOTTOM);
  useKeyboardHandler(
    {
      onMove: (e) => {
        "worklet";
        height.value = Math.max(e.height, PADDING_BOTTOM);
      },
    },
    []
  );
  const fakeView = useAnimatedStyle(() => {
    return {
      height: Math.abs(height.value),
      marginBottom: height.value > 0 ? 0 : PADDING_BOTTOM,
    };
  }, []);
  return { height, PADDING_BOTTOM, fakeView };
};
