import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import { peopleConnect, chainLogo } from "../../../assets";
import { RoundButton } from "../../components/button";
import { StackNavigationProp } from "@react-navigation/stack";
import { init, profile } from "../../navigation/routes";
import { navigate } from "../../navigation/navigate";

type NavigationProp = StackNavigationProp<any>;
interface Props {
  navigation: NavigationProp;
}

export default function GetStartedScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={peopleConnect} style={styles.image}>
        <Image source={chainLogo} style={styles.logo}></Image>
        <Text style={styles.text}>
          Discover developers from anywhere and lets collaborate!
        </Text>
        <RoundButton
          text="Get Started"
          onPress={() => navigate(init.Token, { screen: init.Verify})}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  text: {
    paddingBottom: 10,
    fontSize: 20,
    color: "white",
    paddingLeft: 5,
  },
  logo: {
    width: 80,
    height: 80,
  },
});
