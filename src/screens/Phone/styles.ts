import { heightPercentageToDP } from "@utils/DeviceResolution";
import styled from "styled-components/native";

export const ImageBackground = styled.ImageBackground`
  z-index: -1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  padding-top: ${heightPercentageToDP("8%")}px;
`;

export const Text = styled.View``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
