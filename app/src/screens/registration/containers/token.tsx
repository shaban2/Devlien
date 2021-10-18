import React, { useState, Component } from "react";
import { View } from "react-native";
import { AddAccount } from "../../../context/actions";
import { AccountContext } from "../../../context/context";
import {
  initialAccountState,
  initialState,
  User,
} from "../../../context/state";
import { TokenScreenPresenter } from "../presenters/token";
import axios from "axios";
import { navigate } from "../../../navigation/navigate";
import { init, profile } from "../../../navigation/routes";

export const TokenContainer = () => {
  const { dispatch } = React.useContext(AccountContext);
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");

  const submit = () => {
    axios
      .post(
        "http://192.168.43.105:8000/api/account",
        {
          name: name,
          email: email,
          phone_number: phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
          },
        }
      )
      .then((resJson) => {
        dispatch(AddAccount(resJson.data));
        // console.log(resJson);
      })

      .then(() => {
        navigate(init.Profile, { screen: profile.Register });
      });
  };
  console.log("here");

  return (
    <TokenScreenPresenter
      onChangePhone={setPhone}
      onChangeName={setName}
      onChangeEmail={setEmail}
      name={name}
      email={email}
      number={phone}
      onPress={submit}
    />
  );
};
