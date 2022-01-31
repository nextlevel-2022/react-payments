import React, { useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { IState, PayloadAction } from "./types";

export const StateContext = React.createContext<IState | null>(null);
export const DispatchContext = React.createContext<React.Dispatch<PayloadAction> | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      {children}
    </DispatchContext.Provider>
  </StateContext.Provider>
}

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (dispatch === null) {
    throw Error('Context has not been Provided');
  }
  return dispatch;
}

export function useSelector<Selected = unknown>(selector: (value: IState) => Selected): Selected {
  const state = useContext(StateContext);
  if (state === null) {
    throw Error('Context has not been Provided');
  }
  return selector(state);
}
