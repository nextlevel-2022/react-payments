import { CHANGE_INPUT } from "./action";
import { identity } from "../utils";
import { IState, PayloadAction } from "./types";
import { cardHelper, cardHelperKeys } from "./storeHelper";

export const initialState: IState = {
  card: {
    cardNumber0: '',
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    mm: '',
    yy: '',
    owner: '',
    cvc: '',
    password0: '',
    password1: '',
  },
  cards: [],
};

const reducers = {
  [CHANGE_INPUT]: (state: IState, action: PayloadAction<{ name: string; value: string; }>) => {
    const { name, value } = action.payload

    const hookFn = (cardHelper[name as cardHelperKeys]?.hook || identity);

    return {
      ...state,
      card: {
        ...state.card,
        [name]: hookFn(value),
      },
    }
  },
}

export const reducer = (state: IState, action: PayloadAction) => {
  return (reducers[action.type] || identity)(state, action);
}
