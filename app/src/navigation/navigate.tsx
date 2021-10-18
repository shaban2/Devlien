import {
  CommonActions,
  NavigationContainerRef,
} from "@react-navigation/native";

import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef>();


export const navigate: typeof navigationRef.current.navigate = (
  ...args: any
) => {
  navigationRef.current.navigate(...args);
};




export function navigateBack() {
  navigationRef.current?.dispatch(CommonActions.goBack);
}
