import { User } from "./state";

export enum ActionType {
  AddAccount,
}

export interface AddAccount {
  type: ActionType.AddAccount;
  payload: { name: string; email: string; phone_number: string };
}

export const AddAccount = (user: User): AddAccount=> ({
  type: ActionType.AddAccount,
  payload: user,
});

export type Actions = AddAccount;
