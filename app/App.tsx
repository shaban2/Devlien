import React from "react";
import { AppContainer } from "./src/navigation/container";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/navigate";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccountState, initialAccountState } from "./src/context/state";
import { Actions, ActionType } from "./src/context/actions";
import { AccountContext } from "./src/context/context";
import { ProfileNavigator, UserNavigator } from "./src/navigation/main";

// interface UserState {
//   isAuthenticated: false;
//   user: null;
// }
// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// export const AuthContext = React.createContext(AccountContext);

const storeData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user_data", jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};
const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("user_data");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

const reducer = (state: AccountState, action: Actions): AccountState => {
  switch (action.type) {
    case ActionType.AddAccount:
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      storeData(action.payload);

      return { ...state,   users: [action.payload] };
    // case "LOGOUT":
    //   removeValue();
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     user: null,
    //   };
    default:
      return state;
  }
};




   

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialAccountState);
  



// React.useEffect(() => {
//   AsyncStorage.getItem('user_data').then((value) => {
//     if (value) {
//     console.log(value);
//     }
//   });
// }, []);
React.useEffect(() => {
 state.users.map((results)=>{
console.log(results)
 })
}, []);

  return (
    <View style={styles.container}>
      <AccountContext.Provider value={{ state, dispatch }}>
        <NavigationContainer ref={navigationRef}>
          {/* <AppContainer /> */}
          {state.users.length !== null ? <ProfileNavigator /> : <UserNavigator />}
        </NavigationContainer>
      </AccountContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
