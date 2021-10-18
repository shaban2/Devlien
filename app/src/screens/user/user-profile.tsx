import React from "react";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardTypeOptions,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
} from "react-native";
import { Ionicons, SimpleLineIcons, Entypo } from "@expo/vector-icons";

import { CircularButton, RoundButton } from "../../components/button";
import { Input } from "../../components/input";
import { AvatarInput } from "../../components/avatar-input";
import { headShot } from "../../../assets";
import { ProfileCard } from "../../components/card";

interface Props {
  value?: string;
  avatar: string;
  type?: KeyboardTypeOptions;
  onChange?(value: string): void;
  onPress?(): void;
  edit?: boolean;
  onSubmit?(): void;
  onChangeAvatar(base64: string, uri: string): void;
}
const statusBarHeight = Constants.statusBarHeight;
export const UserProfilePresenter: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>My Profile</Text>
      </View>

       <View
        style={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          source={headShot}
          style={{ height: 90, width: 90, borderRadius: 80 }}
        ></Image>

        <View style={{ paddingTop: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",

              fontSize: 20,
            }}
          >
            Steve Lingard
          </Text>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Text
            style={{ textAlign: "center", color: "grey", fontWeight: "bold" }}
          >
            Full Stack Engineer
          </Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            paddingTop: 10,
          }}
        >
          <View style={{ paddingRight: "25%" }}>
            <Entypo name="location-pin" size={36} color="blue" />
            <Text style={{}}>Kampala</Text>
          </View>

          <View style={{ paddingRight: "25%" }}>
            <SimpleLineIcons name="graph" size={36} color="blue" />
            <Text style={{}}>Junior</Text>
          </View>

          <View>
            <Entypo name="tools" size={36} color="blue" />
            <Text style={{}}>React</Text>
          </View>
        </View>
      </View> 
      <View style={{flex:1}}>
        <ProfileCard title="Contact" subTitle="Copy number to clip board"  iconName="phone-forwarded"/>
        <ProfileCard title="Email" subTitle="Send an email" iconName="mail" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: statusBarHeight,
    // flexDirection: "column",
  },

  button: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  buttomText: {
    flexDirection: "column",
    paddingTop: 26,
    paddingLeft: 20,
  },

  bottom: {
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: "column",
  },
  text: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 30,
  },

  textContainer: {
    marginTop: statusBarHeight,
    paddingLeft: 40,
    paddingTop: 30,
    // display:"flex",
    // flex:1
  },
});
