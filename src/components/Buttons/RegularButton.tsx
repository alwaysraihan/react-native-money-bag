import React, { FunctionComponent } from "react";
import { colors } from "../colors";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import RegularText from "../Texts/RegularText";
import styled from "styled-components/native";
const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;
// types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}
const RegularButton: FunctionComponent<ButtonProps>= ({onPress,textStyles,btnStyles,children}) => {
  return (
    <ButtonView style={btnStyles} onPress={onPress}>
      <RegularText textStyle={textStyles}>{children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
