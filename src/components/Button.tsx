import React from "react";
import { ImageStyle, ImageURISource, Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { Image } from "react-native";
import { StyleSheet} from "react-native";

interface IButtonStyle{
  btnContainer:ViewStyle;
  leftIcon:ImageStyle;
  text:TextStyle
}

interface Ibutton {
  onPress?: () => void;
  isDisabled?: boolean;
  text: string;
  buttonStyle?: ViewStyle;
  textStyle?: ViewStyle;
  image?: ImageURISource;
  imageStyle?:StyleProp<ImageStyle>;
}

const CustomButton = (props: Ibutton) => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[styles.btnContainer, props?.buttonStyle]}
      onPress={props.onPress}
    >
      {props.image && (
        <Image style={[styles.leftIcon,props?.imageStyle]} source={props.image} />
      )}
      <Text style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create<IButtonStyle>({
  btnContainer: {
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
    marginTop: "3%",
    flexDirection: "row",
    borderColor:'blue',
  },
  text: {
    fontSize: 16,
    fontWeight:'500',
    color:"#000000"
  },
  leftIcon: {
    position: "absolute",
    left: 16,
    height: 20,
    width: 20,
    resizeMode: "contain",
  },

});