import React from "react";
import { AntDesign, Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { arrowRight } from "../../assets";

interface CardProps {
  iconName:string;
  icon?: string;
  subTitle: string;
  title: string;
  
}

export const ProfileCard: React.FC<CardProps> = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        margin: 10,
        alignSelf: "center",
        borderRadius: 12,
        elevation: 2,
        flexDirection: "column",
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.16,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
      }}
    >
      <View
        style={{
          height: 75,
          marginRight: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              borderBottomLeftRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Image
              source={{ uri: props.image, width: 40, height: 40 }}
              borderRadius={5}
            /> */}
            {/* <Ionicons name={props.icon} size={24} color="blue" /> */}
            <Feather name={props.iconName} size={24} color="blue" />
            
          </View>

          <View
            style={{
              backgroundColor: "transparent",
              flex: 3,
              justifyContent: "center",
              marginLeft: 3,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 13,
                margin: 3,
              }}
            >
              {props.title}
            </Text>

            <Text style={{ color: "#adb3bf", fontSize: 11, margin: 3 }}>
              {props.subTitle}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderBottomRightRadius: 12,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            {/* <AntDesign name="arrowright" size={24} color="blue" /> */}
            {/* <Ionicons name="chevron-forward" size={24} color="blue" /> */}
            
            <Image source={arrowRight} style={{width:20,height:20}}></Image>
            
          </View>
        </View>
      </View>
    </View>
  );
};
