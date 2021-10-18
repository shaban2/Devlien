// import { createStackNavigator } from "@react-navigation/stack";
// import React from "react";
// import { init } from "../../navigation/routes";
// import GetStartedScreen from "../start/start";
// import { OtpScreenPresenter } from "./presenters/otp";
// import VerifyOtpScreen from "./presenters/verify-otp";



// const Stack = createStackNavigator();

// export const authNavigator: React.FC = () => {
//   return (
//     <Stack.Navigator initialRouteName={init.Start} headerMode="none">
//       <Stack.Screen
//         name={init.Start}
//         component={GetStartedScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name={init.Otp}
//         component={OtpScreenPresenter}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen
//         name={init.Verify}
//         component={VerifyOtpScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };
