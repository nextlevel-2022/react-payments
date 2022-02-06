import { hookMaxLength, hookMonth, hookOnlyNumber } from "../utils/hook";
import { isRequire } from "../utils/validator";

export const cardHelper = {
  cardNumber0: {
    hook: hookOnlyNumber,
    validate: isRequire,
  },
  cardNumber1: {
    hook: hookOnlyNumber,
    validate: isRequire,
  },
  cardNumber2: {
    hook: hookOnlyNumber,
    validate: isRequire,
  },
  cardNumber3: {
    hook: hookOnlyNumber,
    validate: isRequire,
  },
  mm: {
    hook: hookMonth,
  },
  cvc: {
    hook: hookOnlyNumber,
  },
  owner: {
    hook: hookMaxLength(30),
  },
}

export type cardHelperKeys = keyof typeof cardHelper;