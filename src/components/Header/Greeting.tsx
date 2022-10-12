import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
interface GettingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}
const Greeting: FunctionComponent<GettingProps> = (props) => {
  return (
    <>
      <StyledView>
        <RegularText
          textStyle={[
            {
              color: colors.secondary,
              fontSize: 22,
            },
            props.mainTextStyles,
          ]}
        >
          {props.mainText}
        </RegularText>
        <SmallText
          textStyle={[
            {
              color: colors.grayDark,
            },
            props.subTextStyles,
          ]}
        >
          {props.subText}
        </SmallText>
      </StyledView>
    </>
  );
};

export default Greeting;
