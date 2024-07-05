import React from "react";
import {
  Image,
  ImageStyle,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";


interface IDescriptionCard {
  image?: ImageURISource;
  description: string;
  onPress?: (selectedValue: number|string|any) => void;
  style?: ViewStyle;
  imageUri?: string;
  imageStyle?:ImageStyle;
  id?:number;
}

interface IDescriptionStyle{
  cardContainer:ViewStyle;
  img:ImageStyle;
}

const DescriptionCard = (props: IDescriptionCard) => {
  return (
    <Pressable
      style={[styles.cardContainer, props.style]}
      onPress={() => {
        {
          props.onPress && props.onPress(props?.id ? props?.id:props.description);
        }
      }}
    >
      {props?.image && <Image source={props?.image} style={styles.img} />}
      {props?.imageUri && (
        <Image source={{ uri: props?.imageUri }} style={[styles.img,props?.imageStyle]} />
      )}
      <Text
        style={[ { textAlign: "center" }]}
      >
        {props.description}
      </Text>
    </Pressable>
  );
};

export default DescriptionCard;

const styles = StyleSheet.create<IDescriptionStyle>({
  cardContainer: {
    width: 200 / 2,
    padding: 20,
    height: 500 / 5.5,
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    marginBottom: 10,
  },
});