import React from "react";
import {
  Image,
  ImageProps,
  Pressable,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";



interface IAppHeaderStyle {
  logoutContainer: ViewStyle;
  topContainer: ViewStyle;
  headerContainer: ViewStyle;
  img: ImageProps;
  headingContent: TextProps;
  logoutBtn: ImageProps;
}
interface IHeaderProps {
  topheading: string;
  isLogoutButton?: boolean;
  onPress?: () => void;
  rightButtonPress?: () => void;
}
const Header = (props: IHeaderProps) => {
  return (
    <View style={styles.headerContainer} testID="appHeaderContainer">
      <View style={styles.topContainer}>
        <Pressable
          onPress={() => {
           
          }}
        >
          
        </Pressable>
        <Text style={styles.headingContent}>
          {props.topheading}
        </Text>
      </View>

      {props?.isLogoutButton && (
        <View style={styles.logoutContainer}>
         
          <TouchableOpacity
            onPress={() => {
              if (props.rightButtonPress) props.rightButtonPress();
            }}
          >
            <Text style={styles.headingContent}>
              {"LogOUt"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: 'blue',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  img: {
    width: 12,
    height: 18,
    resizeMode: "contain",
    tintColor: 'white',
    transform: [{ rotate: "90deg" }],
  },
  headingContent: {
    color: 'white',
    marginLeft: 16,
    fontWeight:'500',
    fontSize: 16,
  },
  logoutBtn: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutContainer: {
    flexDirection: "row",
  },
});