import styled from "styled-components/native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/DeviceResolution";

export const AnimeSplash = styled.View`
  position: absolute;
  top: ${heightPercentageToDP("10%")}px;
  left: ${widthPercentageToDP("10%")}px;
  z-index: 999999999999;
`;

export const Container = styled.View``;

export const Loading = styled.View`
  position: absolute;
  bottom: ${heightPercentageToDP("30%")}px;
  z-index: 999999999999;
  width: 100%;
  height: 20px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;
