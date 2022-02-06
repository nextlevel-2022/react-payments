interface ICardDetail {
  cardNumber0: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  mm: string;
  yy: string;
  owner: string;
  cvc: string;
  password0: string;
  password1: string;
}

interface ICard {
  cardNumber1: string;
}

export interface IState {
  card: ICardDetail;
  cards: ICard[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface PayloadAction<Payload = any> {
  type: string;
  payload: Payload;
}