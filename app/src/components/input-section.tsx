import * as React from "react";
import {
  KeyboardTypeOptions,
  View,
  StyleSheet,
  Image,
} from "react-native";

import { chainLogo } from "../../assets";
import { Input } from "./input";


interface Props {
  autofocus?: boolean;
  lines?: number;
  label?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
  value?: string;
  type?: KeyboardTypeOptions;
  placeholder: string;
  disabled?: boolean;
  dark?: boolean;
  onChange?(value: string): void;
  onSubmit?(): void;
  edit?: boolean
}

export const OtpInputSection : React.FC<Props> = (props) =>  {
  return (
    <View style={styles.wrapper}>
      <View style={styles.label}>
        <Image source={chainLogo} style={styles.logo}></Image>
      </View>

      {/* <Input value={props.value} type={props.type} onChange={props.onChange} edit={props.edit} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flex: 1,
  },
  logo: {
    height: 100,
    width: 100,
  },
  label: {
    paddingTop: 30,
    flex: 1,
  },
});
