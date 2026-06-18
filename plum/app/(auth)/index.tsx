import * as Google from "expo-auth-session/providers/google";
import { useAuth } from "@/contexts/AuthContext";
import { Image } from "expo-image";
import Input from "@/components/Inputs/TextInput";
import { Feather, Ionicons } from "@expo/vector-icons";
import PasswordInput from "@/components/Inputs/PasswordInput";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import { useGradualAnimation } from "@/hooks/utils/useGradualAnimation";

export default function AuthScreen() {
  const { login, register, googleLogin, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: process.env.EXPO_PUBLIC_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      googleLogin(response);
    }
  }, [response]);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (mode === "login") login(email, password);
    else register(email, password);
  };

  if (user) {
    return (
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-xl font-semibold">Welcome {user.email}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-center px-6">
          {/* Logo */}
          <View className="items-center justify-center mb-8">
            <Image
              source={require("@/assets/images/icon.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>

          {/* Toggle Sign In / Register */}
          <View className="flex-row justify-center mb-6">
            <TouchableOpacity onPress={() => setMode("login")}>
              <Text
                className={`mx-4 text-lg font-semibold ${
                  mode === "login" ? "text-primary" : "text-gray-400"
                }`}
              >
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode("register")}>
              <Text
                className={`mx-4 text-lg font-semibold ${
                  mode === "register" ? "text-primary" : "text-gray-400"
                }`}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Inputs */}
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            icon={<Feather name="mail" color="#5A2D81" size={20} />}
          />
          <PasswordInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            icon={<Feather name="lock" color="#5A2D81" size={20} />}
          />

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit}
            className="w-full bg-secondary flex items-center justify-center py-4 rounded-full mt-4"
          >
            <Text className="text-xl text-white font-bold">
              {mode === "login" ? "Login" : "Register"}
            </Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-[1px] bg-primary" />
            <Text className="mx-2 text-primary font-semibold">OR</Text>
            <View className="flex-1 h-[1px] bg-primary" />
          </View>

          {/* Google Login */}
          <TouchableOpacity onPress={() => promptAsync()} disabled={!request}>
            <View className="flex-row items-center justify-center gap-4 py-4 bg-secondary rounded-full">
              <Ionicons name="logo-google" size={20} color="white" />
              <Text className="text-white font-bold">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
