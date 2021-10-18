export interface AccountState {
  users: User[];
  isAuthenticated: boolean,
}

export interface User {
  name: string;
  email: string;
  phone_number: string;
}


export const initialAccountState: AccountState = {
    users: [],
    isAuthenticated: false,
    
  };

  export const initialState: User = {
    name:"",
    email:"",
    phone_number:""    
  };