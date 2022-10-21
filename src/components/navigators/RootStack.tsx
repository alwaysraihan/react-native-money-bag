import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/Welcome";
import Home from "../../screens/Home";
import { colors } from "../colors";
import Greeting from "../Header/Greeting";
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};
import ProfileImage from "../../../assets/raihan.jpg";
import Profile from "../Header/Profile";
import { CardProps } from "../Cards/cardTypes";
import Balance from "../../screens/Balance";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.grayLight,
              borderBottomWidth: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              elevation: 0,
              height: 120,
            },
            headerTintColor: colors.secondary,
            headerRightContainerStyle: {
              paddingRight: 25,
            },
            headerLeftContainerStyle: {
              paddingLeft: 10,
            },
            headerRight: () => (
              <Profile
                img={ProfileImage}
                imageContainerStyle={{ backgroundColor: colors.tertiary }}
              />
            ),
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => (
                <Greeting
                  mainText="Hey Raihan!"
                  subText="Welcome back"
                  {...props}
                />
              ),
              headerLeft: () => <></>,
            }}
          />
          <Stack.Screen
            name="Balance"
            component={Balance}
            options={({ route }) => ({
              headerTitle: route?.params?.alias,
              headerTitleAlign: "center",
              headerBackImage: (props) => (
                <Ionicons
                {...props}
                  name="chevron-back"
                  size={25}
                  color={colors.secondary}
                />
              ),
              headerLeftContainerStyle:{
                paddingLeft:0
              }
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default RootStack;
