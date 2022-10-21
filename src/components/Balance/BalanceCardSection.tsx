import React, { FunctionComponent } from 'react';
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BalanceCard from './BalanceCard';

const BalanceCardSectionBackground= styled.View`
    flex: 2;
    width: 100%;
    align-items: center;
`

import { IBalanceCardProps } from './types';
const BalanceCardSection:FunctionComponent<IBalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
        <BalanceCard {...props}/>
    </BalanceCardSectionBackground>
  )
}

export default BalanceCardSection