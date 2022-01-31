export const CHANGE_INPUT = 'CARD/CHANGE_INPUT' as string;

export const changeInput = (name: string, value: string) => {
  return {
    type: CHANGE_INPUT,
    payload: {
      name, value,
    },
  }
}