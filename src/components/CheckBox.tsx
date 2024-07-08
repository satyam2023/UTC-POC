import { useState } from "react";
import { Image, ImageStyle, Pressable, TouchableOpacity, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

interface ICheckBoxStyle{
  switchContainer:ViewStyle;
  circular:ViewStyle;
  img:ImageStyle;
}

interface ICustomSwitch {
  isRectangular?: boolean;
  onPress?: () => void;
  status?: boolean;
  style?: ViewStyle;
}

const CustomCheckBox = (props: ICustomSwitch) => {
  const [status, setStatus] = useState<boolean>(false);
  const handlePress = () => {
    setStatus(!status);
    props?.onPress && props.onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.switchContainer,
        props.style,
        { borderRadius: props.isRectangular ? 3 : 10 },
      ]}
    >
      <Pressable onPress={handlePress}>
        {!props.isRectangular ? (
          <View
          testID="conditional-rendering"
            style={
              props.style
            }
          />
         ) : ( 
            <TouchableOpacity
            testID="conditional"
            style={
              !status
                ? styles.circular
                : { backgroundColor: 'black' }
            }
            onPress={()=>{
  if(props?.onPress)
     props.onPress()

            }}
          />
         )} 
      </Pressable>
    </Pressable>
  );
};

export default CustomCheckBox;
const styles = StyleSheet.create<ICheckBoxStyle>({
  switchContainer: {
    height: 17,
    width: 17,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    justifyContent: "center",
    alignItems: "center",
  },
  circular: {
    height: 9,
    width: 9,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  img: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
});