import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { IAmountProps } from "./types";


const AmountSectionBackground= styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-top: 5px;

`
const AmountSection: FunctionComponent<IAmountProps>= (props) => {
  return (
    <AmountSectionBackground>
        <SmallText textStyle={{color:colors.secondary,  marginBottom:15}}>
            Total Balance
        </SmallText>
        <RegularText textStyle={{color:colors.secondary, fontSize:28}}>$ {props.balance}</RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
