import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { IScreenViewProps } from ".";

export const Screen = styled.View<IScreenViewProps>`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 10}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "darkGray"
      ? theme.colors.darkGray
      : theme.colors.white};
`;
