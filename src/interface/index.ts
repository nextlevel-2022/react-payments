export interface CardProps {
  company: string;
  cardNumber: string[];
  ownerName?: string;
  expireMonth: string;
  expireYear: string;
  cvcNumber: string;
  nickname: string;
  bgColor?: string;
  password?: string[];
}

export interface CardCompany {
  name: string;
  color: string;
  publicCardNumber: string;
}
