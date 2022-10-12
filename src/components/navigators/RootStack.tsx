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
};
import ProfileImage from "../../../assets/raihan.jpg";
import Profile from "../Header/Profile";
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
          initialRouteName="Home"
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
                  mainText="Hey Coby!"
                  subText="Welcome back"
                  {...props}
                />
              ),
              headerLeft: () => <></>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default RootStack;
