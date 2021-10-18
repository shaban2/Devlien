import * as ImagePicker from "expo-image-picker";
import * as React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { CAMERA_ROLL, requestPermission } from "./permissions";

import { Ionicons } from '@expo/vector-icons'; 
import { AddPerson } from "../../assets";


interface Props {
  image?: string;

  onChange(base64: string, uri: string): void;
}
export const circle36 = {
  width: 36,
  height: 36,

  borderRadius: 18,
};

export const AvatarInput: React.SFC<Props> = (props) => {
  function handleUpload() {
    requestPermission(CAMERA_ROLL)
      .then(() => {
        return ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [1, 1],
          allowsMultipleSelection: false,
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
          base64: true,
        });
      })
      .then((result) => {
        if (result.cancelled === false) {
          props.onChange((result as any).base64, result.uri);
        }
      });
  }

  return (
    <View style={{display:'flex', alignItems:"center"}}>
      <TouchableOpacity activeOpacity={1} style={{alignItems:"center",marginBottom:16}} onPress={handleUpload}>
        {props.image ? (
          <Image
            style={styles.image}
            source={{ uri: props.image, width: 60, height: 60 }}
          />
        ) : (
          <Image source={AddPerson} style={{width:60,height:60}}></Image>
        )}

        <View
          style={[circle36, { position: "absolute", bottom: -14, right: -29 }]}
        >
          <Ionicons name="ios-camera" size={36} color="blue" />
  
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Upload Profile Picture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 36,
    width: 72,
    height: 72,
  },
  text: {},
});
