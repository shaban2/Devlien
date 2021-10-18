import React from "react";
import { Actions } from "./actions";
import { AccountState, initialAccountState } from "./state";


export const AccountContext = React.createContext<{
    state: AccountState;
    dispatch: React.Dispatch<Actions>;
  }>({
    state: initialAccountState,
    dispatch: () => undefined,
  });