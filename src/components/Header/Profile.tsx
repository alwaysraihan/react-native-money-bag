import React, { FunctionComponent } from "react";
import {
  StyleProp,
  ImageSourcePropType,
  GestureResponderEvent,
  ViewStyle,
  ImageStyle,
} from "react-native";
import styled from "styled-components/native";
const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;
const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
interface GettingProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const Profile: FunctionComponent<GettingProps> = (props) => {
  return (
    <StyledView onPress={props.onPress} style={props.imageContainerStyle}>
      <StyledImage  style={props.imgStyle} source={props.img} />
    </StyledView>
  );
};

export default Profile;
