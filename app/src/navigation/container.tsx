
import { createSwitchNavigator } from "@react-navigation/compat";
import { TokenScreenPresenter } from "../screens/registration/presenters/token";
import { ProfilePresenter } from "../screens/registration/presenters/profile";
import GetStartedScreen from "../screens/start/start";
import { ProfileNavigator, UserNavigator } from "./main";
import { init, profile } from "./routes";

export const AppContainer = createSwitchNavigator(
  {
    [init.Start]: GetStartedScreen,
    // [init.Otp]: tokenScreenPresenter,
    // [profile.Register]: ProfilePresenter,
    [init.Token]: UserNavigator,
    [init.Profile]: ProfileNavigator,
  
  },
  {
    initialRouteName: init.Start
  }
);
