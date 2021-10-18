import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

interface RoundButtonProps {
  // disabled: boolean;
  // style?: StyleProp<ViewStyle>;
  text: string;
  onPress?(): void;
}

export const RoundButton: React.FC<RoundButtonProps> = (props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: "100%",
          height: 60,
          borderRadius: 9,
          backgroundColor: "#0000ff",
        }}
        onPress={props.onPress}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 20,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

interface CicularButtonProps {
  // disabled: boolean;
  // style?: StyleProp<ViewStyle>;
  onPress?(): void;
}

export const CircularButton: React.FC<CicularButtonProps> = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 70,
          backgroundColor: "#0000ff",
          borderRadius: 50,
        }}
        onPress={props.onPress}
      >
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
