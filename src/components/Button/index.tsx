import React, { memo } from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import { Load } from "../Animations/Load";
import * as S from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  type: S.TypeButton;
  size?: S.SizeButton;
}

function Button({ title, loading = false, type, size, ...rest }: IButtonProps) {
  return (
    <S.Container
      {...rest}
      activeOpacity={0.7}
      type={type}
      size={size}
      style={type !== "link" && { ...theme.shadow }}
    >
      {loading ? <Load /> : <S.TitleButton type={type}>{title}</S.TitleButton>}
    </S.Container>
  );
}
export default memo(Button);
