import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  icon,
  placeholder,
  ...props
}: InputProps) {
  return (
    <View className="mb-4">
      {label && (
        <Text className="mb-1 text-gray-700 font-semibold">{label}</Text>
      )}
      <View className="flex-row items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#5A2D81]">
        {icon && <View className="mr-2 mt-0.5">{icon}</View>}
        <TextInput
          className="flex-1 text-gray-900"
          placeholder={placeholder}
          placeholderTextColor="#999"
          cursorColor="#5A2D81"
          {...props}
        />
      </View>
      {error && <Text className="mt-1 text-red-500 text-sm">{error}</Text>}
    </View>
  );
}
