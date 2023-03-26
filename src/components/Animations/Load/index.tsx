import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface ILoad {
  color?: string;
}

export function Load({ color }: ILoad) {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    />
  );
}
