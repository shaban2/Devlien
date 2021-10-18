import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { init, profile } from "./routes";
import { ProfilePresenter } from "../screens/registration/presenters/profile";
import { TokenScreenPresenter } from "../screens/registration/presenters/token";
import { UserProfilePresenter } from "../screens/user/user-profile";
import { TokenContainer } from "../screens/registration/containers/token";

const Stack = createStackNavigator();

export const UserNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={init.Token} headerMode="none">
      <Stack.Screen name={init.Token} component={TokenContainer} />
    </Stack.Navigator>
  );
};

export const ProfileNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={profile.Register} headerMode="none">
      <Stack.Screen name={profile.Register} component={ProfilePresenter} />

      <Stack.Screen name={profile.Profile} component={UserProfilePresenter} />
    </Stack.Navigator>
  );
};
