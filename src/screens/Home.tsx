import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import CardSection from "../components/Cards/CardsSection";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import logo from "../../assets/bank.png";
import TransactionSection from "../components/Transaction/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait from "../../assets/raihan.jpg";
const HomeContainer = styled(Container)`
  background-color: ${colors.gray};
  width: 100%;
  flex: 1;
`;
// types 
import { RootStackParamList } from "../components/navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type NavigationProps= StackScreenProps<RootStackParamList,"Home">
const Home: FunctionComponent<NavigationProps>= ({navigation}) => {
  const cardData = [
    {
      id: 1,
      accountNo: "38654654564",
      balance: 2000.45,
      alias: "Personal Prepaid",
      logo: logo,
    },
    {
      id: 2,
      accountNo: "445465455",
      balance: 50000.33,
      alias: "Personal Prepaid",
      logo: logo,
    },
    {
      id: 3,
      accountNo: "6546545458",
      balance: 100.22,
      alias: "School Prepaid",
      logo: logo,
    },
  ];
  const transactionData = [
    {
      id: 1,
      amount: "-$84.00",
      date: "3 Sep 2022",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$84.00",
      date: "3 Sep 2022",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 3,
      amount: "-$84.00",
      date: "3 Sep 2022",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "343.44",
      name: "Max Harry",
      background: colors.tertiary,
      img: portrait,
    },
    {
      id: 2,
      amount: "343.44",
      name: "Max Harry",
      background: colors.tertiary,
      img: portrait,
    },
    {
      id: 3,
      amount: "343.44",
      name: "Max Harry",
      background: colors.tertiary,
      img: portrait,
    },
  ];
  
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
