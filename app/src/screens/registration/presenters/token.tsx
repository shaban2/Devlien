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

interface Props {
  name?: string;
  email?: string;
  number?: string;
  type?: KeyboardTypeOptions;
  // onChange?(value: string): void;
  onChangeName?(name: string): void;
  onChangeEmail?(email: string): void;
  onChangePhone?(number: string): void;
  onPress?(): void;
  edit?: boolean;
 
}
const statusBarHeight = Constants.statusBarHeight;
export const TokenScreenPresenter: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Create Account</Text>
      </View>
      <View style={styles.input}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.label}>Name</Text>
          <Input
            value={props.name}
            type="default"
            onChange={props.onChangeName}
           
          />
        </View>

        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.label}>Email address</Text>
          <Input
            value={props.email}
            type="email-address"
            onChange={props.onChangeEmail}
            
          />
        </View>

        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={styles.label}>Phone Number</Text>
          <Input
            value={props.number}
            type="phone-pad"
            onChange={props.onChangePhone}
          
          />
        </View>
      </View>

      <View style={styles.button}>
        <View style={styles.buttomText}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sign up</Text>
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
  },
  label: {
    // fontWeight: "bold",
    textAlign: "left",
    // flexDirection: "column",
    paddingLeft: 40,
    color: "gray",
    fontSize: 15,
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
  },
});
