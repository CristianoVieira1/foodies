import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React from "react";
import { WithChildren } from "../../types";
import * as S from "./styles";

export interface IScreenViewProps extends WithChildren {
  statusbarColor?: StatusBarStyle;
  backgroundColor?: "darkGray" | "white";
}

const ScreenView = ({
  children,
  statusbarColor = "dark",
  backgroundColor = "darkGray",
}: IScreenViewProps) => (
  <S.Screen backgroundColor={backgroundColor}>
    <StatusBar style={statusbarColor} />
    {children}
  </S.Screen>
);

export default ScreenView;
