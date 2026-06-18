import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface InputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  [key: string]: any;
}

export default function PasswordInput({
  label,
  error,
  icon,
  placeholder,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mb-4">
      {label && (
        <Text className="mb-1 text-gray-700 font-semibold">{label}</Text>
      )}
      <View className="flex-row items-center border border-gray-300 rounded-xl p-3 focus-within:ring-8 focus-within:ring-[#5A2D81]">
        {icon && <View className="mr-2 mt-0.5">{icon}</View>}
        <TextInput
          className="flex-1 text-gray-900"
          placeholder={placeholder}
          placeholderTextColor="#999"
          cursorColor="#5A2D81"
          secureTextEntry={!showPassword}
          {...props}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="ml-2 mt-0.5"
        >
          {showPassword ? (
            <Feather name="eye" size={20} color="#666" />
          ) : (
            <Feather name="eye-off" size={20} color="#666" />
          )}
        </TouchableOpacity>
      </View>
      {error && <Text className="mt-1 text-red-500 text-sm">{error}</Text>}
    </View>
  );
}
