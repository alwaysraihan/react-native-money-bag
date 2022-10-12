import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-width: 55%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  margin-top: 20px;
  border-radius: 10px;
`;
const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;
// image
import background from "../../assets/raihan.jpg";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
          </TopSection>
          <BottomSection>
            <BigText textStyle={{width:"70%", marginBottom:25}}>Best way to track your money</BigText>
            <SmallText textStyle={{width:"70%", marginBottom:25}}>Best payment method, connects your money to your friends, family.</SmallText>
            <RegularButton onPress={()=>{}}>
              Get Started
            </RegularButton>
          </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
