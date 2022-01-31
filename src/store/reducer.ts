import { CHANGE_INPUT } from "./action";
import { identity } from "../utils";
import { IState, PayloadAction } from "./types";


const reducers = {
  [CHANGE_INPUT]: (state: IState, action: PayloadAction) => {
    const { name, value } = action.payload;

    return {
      ...state,
      card: {
        ...state.card,
        [name]: value,
      },
    }
  },
}
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

export const reducer = (state: IState, action: PayloadAction) => {
  return (reducers[action.type] || identity)(state, action);
}
