import React, { FunctionComponent } from "react";
import { SendMoneyProps } from "./types";
import styled  from "styled-components/native";
import { ScreenWidth } from "../shared";
import Profile from "../Header/Profile";
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  border-radius: 15px;
  justify-content: space-around;

  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => alert("Send Money!")}
    >
      <>
        <Profile img={props.img} imageContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyle={{ textAlign: "left", color: colors.white, fontSize: 12 }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyle={{ color: colors.white, textAlign: "left", fontSize: 13 }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
