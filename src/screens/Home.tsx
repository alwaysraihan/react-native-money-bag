import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import CardSection from "../components/Cards/CardsSection";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import logo from "../../assets/bank.png"
const HomeContainer = styled(Container)`
  background-color: ${colors.gray};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  const cardData = [
    {
      id: 1,
      accountNo: "38654654564",
      balance: 2000.45,
      alias: "Personal Prepaid",
      logo:logo,
    },
    {
      id: 2,
      accountNo: "445465455",
      balance: 50000.33,
      alias: "Personal Prepaid",
      logo:logo
    },
    {
      id: 3,
      accountNo: "6546545458",
      balance: 100.22,
      alias: "School Prepaid",
      logo:logo,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardData}/>
    </HomeContainer>
  );
};

export default Home;
