import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";

export default function HomeScreen() {
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push("/(auth)");
    }
  }, [user]);

  if (!user) return null;
  return (
    <View>
      <Text>home</Text>
    </View>
  );
}
