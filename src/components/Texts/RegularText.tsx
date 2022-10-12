import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

// colors 
import { colors } from '../colors'
import { TextProps } from './Types';
const StyledText=styled.Text`
    font-size: 15px;
    color: ${colors.white};
    text-align: left;
`
const RegularText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText style={props.textStyle}>
{props.children}
    </StyledText>
  )
}

export default RegularText