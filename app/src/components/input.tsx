import * as React from "react";
import {
  KeyboardTypeOptions,
  TextInput,
  View,
  StyleSheet,
  Text,
} from "react-native";

interface Props {
  autofocus?: boolean;
  lines?: number;
  label?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
  value?: string;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  edit?: boolean;
  dark?: boolean;

  onChange?(value: string): void;
  onSubmit?(): void;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <View>
      {/* <View style={styles.description}>
        <Text style={{ color: "white", fontSize: 15, textAlign: "left" }}>
          {props.label}
        </Text>
      </View> */}
      <View style={styles.row}>
        <TextInput
          autoCorrect={false}
          multiline={!!props.lines}
          numberOfLines={props.lines}
          autoCompleteType="off"
          editable={props.edit}
          value={props.value}
          style={styles.text}
          placeholder={props.placeholder}
          onChangeText={props.onChange}
          onSubmitEditing={props.onSubmit}
          keyboardType={props.type}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  row: {
    alignItems: "center",
  },

  description: {
    paddingLeft: 30,
  },

  text: {
    width: "80%",
    color: "black",
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
});
