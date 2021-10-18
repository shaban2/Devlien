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
} from "react-native";

import { CircularButton, RoundButton } from "../../../components/button";
import { Input } from "../../../components/input";
import { AvatarInput } from "../../../components/avatar-input";

interface Props {
  value?: string;
  avatar?: string;
  stack?: string;
  location?: string;
  title?: string;
  type?: KeyboardTypeOptions;
  onChange?(value: string): void;
  onPress?(): void;
  onChangeAvatar(base64: string, uri: string): void;
}
const statusBarHeight = Constants.statusBarHeight;
export const ProfilePresenter: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create A Profile</Text>
      </View>
      
      
      <View style={styles.input}>

      
      <View style={{paddingBottom:30}} >
          <AvatarInput
            image={props.avatar}
            onChange={props.onChangeAvatar}
          />

        </View>



        <View style={{paddingBottom:20}}>
          <Text style={styles.label}>Tech Stack</Text>
          <Input
            value={props.stack}
            type="default"
            onChange={props.onChange}
           
          />
        </View>

        <View style={{paddingBottom:20}}>
          <Text style={styles.label}>Location</Text>
          <Input
            value={props.location}
            type="default"
            onChange={props.onChange}
           
          />
        </View>

        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={styles.label}> Software Role/Title</Text>
          <Input
            value={props.title}
            type="default"
            onChange={props.onChange}
            
            lines={2}
          />
        </View>
      </View>

      <View style={styles.button}>
        <View style={styles.buttomText}>
          <Text style={{fontWeight: "bold",fontSize:20}}>Save Profile</Text>
        </View>
        <View style={styles.bottom}>
          <CircularButton onPress={props.onPress} />
        </View>
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
  input: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    //  flexDirection: "column",
    display:"flex"
  },
  label: {
    // fontWeight: "bold",
    textAlign: "left",
    // flexDirection: "column",
    paddingLeft: 40,
    color:"gray",
    fontSize:15
  },

  button: {
    justifyContent: "space-between",
    flexDirection: "row"
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
    fontSize:30
    
  },

  textContainer: {
    marginTop: statusBarHeight,
    paddingLeft: 40,
    paddingTop:30,
    // display:"flex",
    // flex:1
  },
});
