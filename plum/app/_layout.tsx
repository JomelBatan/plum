import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { KeyboardProvider } from "react-native-keyboard-controller";
export default function RootLayout() {
  return (
    <AuthProvider>
      <KeyboardProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </KeyboardProvider>
    </AuthProvider>
  );
}
